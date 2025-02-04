import { AppConfig } from '@App/Base/AppConfig';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-LandingCarousel',
    standalone: true,
    templateUrl: './LandingCarousel.html',
    styleUrls: ['LandingCarousel.scss'],
    imports: [CommonModule, RouterModule]
})

export class LandingCarouselComponent {
    RoutePaths = RoutePaths;
    // strikers yango mylo adidas
    @Input() slides: { image: string; title: string; description: string }[] = [
        { image: 'assets/Images/landing/1.webp', title: '', description: '' },
        { image: 'assets/Images/landing/2.webp', title: '', description: '' },
        { image: 'assets/Images/landing/3.webp', title: '', description: '' },
        { image: 'assets/Images/landing/4.webp', title: '', description: '' },
        { image: 'assets/Images/landing/5.webp', title: '', description: '' },
        { image: 'assets/Images/landing/6.webp', title: '', description: '' },
        { image: 'assets/Images/landing/7.webp', title: '', description: '' },
    ];
    currentIndex = 0;
    Caption = '';
    Intevral!: any;
    IntervalTime!: number;

    constructor(
        private AppConfig: AppConfig
    ) { }

    ngOnInit(): void {
        this.IntervalTime = this.AppConfig.env.IntervalTime;
        this.StartInterval();
    }

    onPrevSlide() {
        this.ClearInterval();
        this.prevSlide();
        this.StartInterval();
    }

    onNextSlide() {
        this.ClearInterval();
        this.nextSlide();
        this.StartInterval();
    }

    onGoToSlide(index: number) {
        this.ClearInterval();
        this.goToSlide(index);
        this.StartInterval();
    }

    StartInterval() {
        this.Intevral = setInterval(() => { this.nextSlide() }, this.IntervalTime);
    }

    ClearInterval() {
        clearInterval(this.Intevral);
    }


    private prevSlide() {
        this.currentIndex = (this.currentIndex === 0) ? (this.slides.length - 1) : (this.currentIndex - 1);
        this.Caption = this.slides[this.currentIndex].title;
    }

    private nextSlide() {
        this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : (this.currentIndex + 1);
        this.Caption = this.slides[this.currentIndex].title;
    }

    private goToSlide(index: number) {
        this.currentIndex = index;
        this.Caption = this.slides[this.currentIndex].title;
    }
}
