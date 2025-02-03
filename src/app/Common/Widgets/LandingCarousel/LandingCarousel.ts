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

    @Input() slides: { image: string; title: string; description: string }[] = [
        { image: 'assets/Images/landing/7.webp', title: 'Tio Complex', description: '' },//description kjdc jkc jkdn 1
        { image: 'assets/Images/landing/2.webp', title: 'Lane 9', description: '' },//description kjdc jkc jkdn 2
        { image: 'assets/Images/landing/6.webp', title: 'Mori Sushi', description: '' },//description kjdc jkc jkdn 6
        { image: 'assets/Images/landing/4.webp', title: 'Mondelez', description: '' },//description kjdc jkc jkdn 4
        { image: 'assets/Images/landing/3.webp', title: 'Kansas Burger', description: '' },//description kjdc jkc jkdn 3
        { image: 'assets/Images/landing/5.webp', title: 'Money Fellows', description: '' },//description kjdc jkc jkdn 5
        { image: 'assets/Images/landing/1.webp', title: 'Rubix Park', description: '' },//description kjdc jkc jkdn 7
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
