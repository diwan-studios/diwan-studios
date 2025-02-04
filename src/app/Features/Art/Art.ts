import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { ArtCategories, ArtCategory, ArtProjectItem, ArtProjects, MoreArtProjects } from './Data/Arts';
import { AppConfig } from '@App/Base/AppConfig';


@Component({
    standalone: true,
    templateUrl: './Art.html',
    styleUrls: ['Art.scss'],
    imports: [CommonModule, FormsModule, RouterModule],

})
export class ArtComponent {
    RoutePaths = RoutePaths;
    regex = /['\s]/g;

    private animatedSections: Set<string> = new Set();

    SearchText: string = '';

    Projects: ArtProjectItem[] = ArtProjects;
    filteredProjects: ArtProjectItem[];
    project: string = '';
    selectedProject!: ArtProjectItem;
    selectedProjectIndex: number = 0;

    Categories: ArtCategory[] = ArtCategories;
    MoreProjects: ArtProjectItem[] = MoreArtProjects;

    category: any;

    @ViewChildren('projectElement') projectElements!: QueryList<ElementRef>;
    observer: IntersectionObserver | null = null;
    activeCategoryId: number | null = null;
    activeProjectId: number | null = null;

    constructor(
        private renderer: Renderer2,
        private el: ElementRef,
        private ActivatedRoute: ActivatedRoute,
        private location: Location,
        protected AppConfig: AppConfig
    ) {
        this.filteredProjects = this.Projects
    }

    private scrollTo(element: HTMLElement) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        element.style.paddingTop = "50px"
    }

    ngAfterViewInit() {
        this.filteredProjects = this.Projects;
        this.ActivatedRoute.params.subscribe((params) => {

            this.project = params['project'];
            this.category = params['category'];

            if (!this.category) { return }
            if (!this.project) {
                const parent = this.el.nativeElement.querySelector(`#${this.category}`)
                setTimeout(() => {
                    this.scrollTo(parent);
                }, 100);
                return
            }
            const parent = this.el.nativeElement.querySelector(`#${this.category}`)
            const element = parent.querySelector(`.${this.project}`)
            setTimeout(() => {
                this.scrollTo(element);
            }, 100);
        });

        // this.Animation.Arts();

        if (window.innerWidth > 768) {
            const options = { root: null, threshold: 0.3 };

            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.activeProjectId = +entry.target.id.split('-')[1];
                        this.activeCategoryId = +entry.target.id.split('-')[3];
                    }
                });
            }, options);

            this.projectElements.forEach(project => this.observer!.observe(project.nativeElement));
        }
    }

    Animation = {
        Arts: () => {
            const arts = document.querySelectorAll('.hoverable-img-item')!;
            arts.forEach(art => {


                art.classList.remove('art-transition');

                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const categoryAnchor = this.el.nativeElement.querySelector(`a[data-category="${art.parentElement?.parentElement?.getAttribute('id')}"]`);
                            this.activetab(categoryAnchor)
                            art.classList.add('art-transition');
                            return;
                        }
                        art.classList.remove('art-transition');
                    });
                });

                observer.observe(art);
            })

            const videos = document.querySelectorAll('.div-video')!;
            videos.forEach(art => {
                // console.log(project);
                art.classList.remove('art-transition');

                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            art.classList.add('art-transition');
                            return;
                        }
                        art.classList.remove('art-transition');
                    });
                });

                observer.observe(art);
            })
        },
    }
    observerOptions: {} = {
        root: null,
        rootMargin: '10px',
        threshold: 0.1,
    };

    Search() {
        debugger
        this.animatedSections.clear();
        if (this.SearchText.trim() === '') {
            this.filteredProjects = this.Projects;
            this.activetab(undefined)

        } else {
            this.filteredProjects = this.Projects.filter(category =>
                category.Name.toLowerCase().includes(this.SearchText.trim().toLowerCase())
                || category.Description.toLowerCase().includes(this.SearchText.trim().toLowerCase())
            );
            const menulink = this.el.nativeElement.querySelector('#' + this.filteredProjects[0].Name.replace(this.regex, '').toLowerCase())
            this.activetab(menulink)
        }

    }
    activetab(link?: Element) {
        const menuLinks = this.el.nativeElement.querySelectorAll('#categories');
        menuLinks.forEach((link: Element) => {
            link.classList.remove('active');
        })
        if (link) {
            link.classList.add('active');

        } else {
            menuLinks[0].classList.add('active');
        }

    }

    GoToProject(link: string) {
        this.location.go(link);
        const parent = this.el.nativeElement.querySelector(`#${link.split('/')[1]}`);
        const id = `.${link.split('/')[2]}`;
        const element = parent.querySelector(id);
        this.scrollTo(element);
    }

    GotoMoreProjects() {
        this.location.go('/artworks/worldwide');
        const element = document.querySelector('#worldwide')!;
        this.scrollTo(element as any);
    }

    //#region images modal and navigating
    onImageClick(id: number, imageIndex: number) {
        console.log(id);
        this.selectedProject = this.Projects.find(p => p.Id == id)!;
        this.selectedProjectIndex = imageIndex;
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.key === 'ArrowRight') {
            this.nextImage();
        } else if (event.key === 'ArrowLeft') {
            this.previousImage();
        }
    }

    nextImage() {
        if (this.selectedProjectIndex < this.selectedProject.Images.length - 1) {
            this.selectedProjectIndex = this.selectedProjectIndex + 1;
        } else {
            this.selectedProjectIndex = 0;
        }
    }

    previousImage() {
        if (this.selectedProjectIndex > 0) {
            this.selectedProjectIndex--;
        } else {
            this.selectedProjectIndex = this.selectedProject.Images.length - 1;
        }
    }

    onGoToImage(imageIndex: number) {
        this.selectedProjectIndex = imageIndex;
    }
    //#endregion

    ngOnDestroy() {
        this.observer?.disconnect();
    }
}
