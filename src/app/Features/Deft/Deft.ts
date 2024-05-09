import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { animate, stagger } from 'motion';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { DeftProjectItem, DeftProjects } from './Data/Deft';

class ProjectItem {
    Name!: string;
    Description!: string;
    Images!: string[];
    Location!: string;
}
class Category {
    Name!: string;
    ProjectItem!: ProjectItem[]
}


@Component({
    standalone: true,
    templateUrl: './Deft.html',
    styleUrls: ['Deft.scss'],
    imports: [CommonModule, FormsModule, RouterModule],

})
export class DeftComponent {
    RoutePaths = RoutePaths;

    private animatedSections: Set<string> = new Set();
    SearchText: string = '';
    Projects: DeftProjectItem[] = DeftProjects

    // filteredProjects: DeftProjectItem[];
    project: string = '';
    category: any;


    constructor(private renderer: Renderer2, private el: ElementRef, private ActivatedRoute: ActivatedRoute, private location: Location) {
        // this.filteredProjects = this.Projects
    }

    private scrollTo(element: HTMLElement) {
        element.scrollIntoView({
            behavior: 'smooth', block: 'start',
        });
        element.style.paddingTop = "50px"


    }

    ngAfterViewInit() {
        // this.filteredProjects = this.Projects;
        this.ActivatedRoute.params.subscribe((params) => {

            this.category = params['category'];
            var parent: HTMLElement;
            if (!this.category) {

                parent = this.el.nativeElement.querySelector(`#PAINTING`)

            }
            else { parent = this.el.nativeElement.querySelector(`#${this.category.replace(' ', '').trim().toLocaleUpperCase()}`) }
            setTimeout(() => {
                this.scrollTo(parent);
            }, 100);
        });

        this.Animation.Arts()
    }

    Animation = {
        Arts: () => {
            const arts = document.querySelectorAll('.hoverable-img-item')!;
            arts.forEach(art => {
                art.classList.remove('art-transition');

                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const categoryAnchor = this.el.nativeElement.querySelector(`[data-category="${art.parentElement?.parentElement?.getAttribute('id')}"]`);
                            this.activetab(categoryAnchor)
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

    activetab(link?: Element) {
        const menuLinks = this.el.nativeElement.querySelectorAll('.category button');
        menuLinks.forEach((link: Element) => {
            link.classList.remove('active');
        })
        if (link) {
            link.classList.add('active');

        } else {
            menuLinks[0].classList.add('active');
        }

    }

    attachClickEventListeners(category: string) {
        this.location.go('/deft/' + category.trim().toLocaleLowerCase());
        const parent = this.el.nativeElement.querySelector(`#${category.replace(' ', '').trim().toLocaleUpperCase()}`)
        this.scrollTo(parent);
    }
}
