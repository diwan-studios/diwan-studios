import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
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
        this.checkElementsVisibility();
    }

    ngAfterViewInit() {
        this.filteredProjects = this.Projects;
        this.ActivatedRoute.params.subscribe((params) => {

            this.project = params['project'];
            this.category = params['category'];

            if (!this.category) { this.checkElementsVisibility(); return }
            if (!this.project) {
                const parent = this.el.nativeElement.querySelector(`.${this.category.replace(' ', '').trim().toLocaleUpperCase()}`)
                setTimeout(() => {
                    this.scrollTo(parent);
                }, 100);
                return
            }
            const parent = this.el.nativeElement.querySelector(`.${this.category.replace(' ', '').trim().toLocaleUpperCase()}`)
            const element = parent.querySelector(`#${this.project.replace(' ', '').trim().toLocaleUpperCase()}`)
            setTimeout(() => {
                this.scrollTo(element);
            }, 100);
        });

        // this.Animation.Arts();
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

    private checkElementsVisibility() {
        const categoryElements = this.el.nativeElement.querySelectorAll('.category');

        categoryElements.forEach((categoryElement: Element) => {
            const category = categoryElement.getAttribute('id');
            const rectt = categoryElement.getBoundingClientRect();
            if (!(rectt.top <= 100 && rectt.bottom > 100)) {
                if (category != null) {
                    var button = document.querySelector('[data-bs-target="#' + category.trim().replace(' ', '').charAt(0).toUpperCase() + category.trim().replace(' ', '').slice(1).toLowerCase() + '-collapse"]');
                    if (button) {
                        this.renderer.removeStyle(button, 'font-weight');
                        button?.setAttribute('aria-expanded', 'false');
                        button?.classList.add('collapsed');
                    }
                    const ParentDev = document.querySelector('.collapse#' + category.charAt(0).toUpperCase() + category.slice(1).toLowerCase() + '-collapse') as HTMLElement;
                    ParentDev?.classList.remove('show');

                }
            }
            const projectElements = categoryElement.querySelectorAll('.projects');

            projectElements.forEach((projectElement: Element) => {
                const project = projectElement.getAttribute('id');
                const categoryAnchor = this.el.nativeElement.querySelector(`a[data-category="${category + '-' + project}"]`);
                const rect = projectElement.getBoundingClientRect();

                if (rect.top <= 400 && rect.bottom > 400) {
                    this.renderer.addClass(categoryAnchor, 'active');
                    if (category != null) {
                        var button = document.querySelector('[data-bs-target="#' + category.trim().replace(' ', '').charAt(0).toUpperCase() + category.trim().replace(' ', '').slice(1).toLowerCase() + '-collapse"]');
                        if (button) {
                            this.renderer.setStyle(button, 'font-weight', 'bold');
                            button?.setAttribute('aria-expanded', 'true');
                            button?.classList.remove('collapsed');
                        }
                        const ParentDev = document.querySelector('.collapse#' + category.charAt(0).toUpperCase() + category.slice(1).toLowerCase() + '-collapse') as HTMLElement;
                        ParentDev?.classList.add('show');

                    }

                    if (project != null && !this.animatedSections.has(category + '-' + project)) {
                        const observerprojects = new IntersectionObserver((entries) => {
                            entries.forEach((entry) => {
                                if (entry.isIntersecting) {
                                    const imgFluidElements = projectElement.querySelectorAll('.img');
                                    // animate(
                                    //     imgFluidElements,
                                    //     {
                                    //         opacity: [0, 0.5, 1],
                                    //         y: [15, 0],
                                    //     },
                                    //     {
                                    //         delay: stagger(0.05),
                                    //         duration: 0.6,
                                    //         easing: ['ease-in-out'],
                                    //     }
                                    // );

                                    observerprojects.disconnect();
                                    this.animatedSections.add(category + '-' + project);
                                }
                            });
                        }, this.observerOptions);

                        observerprojects.observe(projectElement);
                    }
                } else {
                    this.renderer.removeClass(categoryAnchor, 'active');
                }

            });
        });
    }


    Search() {
        this.animatedSections.clear();
        if (this.SearchText.trim() === '') {
            this.filteredProjects = this.Projects;
            this.activetab(undefined)

        } else {
            this.filteredProjects = this.Projects.filter(category =>
                category.Name.toLowerCase().includes(this.SearchText.trim().toLowerCase())
                || category.Description.toLowerCase().includes(this.SearchText.trim().toLowerCase())
            );
            const menulink = this.el.nativeElement.querySelector('.' + this.filteredProjects[0].Name)
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

    attachClickEventListeners(category: string, project: string) {
        this.location.go('/artworks/' + category.replace(' ', '').trim().toLocaleLowerCase() + '/' + project.replace(' ', '').trim().toLocaleLowerCase());
        const parent = this.el.nativeElement.querySelector(`.${category.replace(' ', '').trim().toLocaleUpperCase()}`)
        const id = `#${project.replace(' ', '').trim().toLocaleUpperCase()}`;
        const element = parent.querySelector(id)
        this.scrollTo(element);
    }

    GotoMoreProjects() {
        this.location.go('/artworks/moreprojects');
        const element = document.querySelector('#MOREPROJECTS')!;
        this.scrollTo(element as any);

    }

    ngOnInit(): void {
        var main = document.querySelector('.main-app');
        if (main) {
            main.addEventListener('scroll', this.onScroll.bind(this));
        }
    }

    ngOnDestroy(): void {
        var main = document.querySelector('.main-app');
        main?.removeEventListener('scroll', this.onScroll.bind(this));
    }

    onScroll(event: any): void {
        this.checkElementsVisibility()
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
}
