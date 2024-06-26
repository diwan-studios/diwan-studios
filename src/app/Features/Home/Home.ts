import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { Router, RouterModule } from '@angular/router';
import { CarouselComponent } from '@App/Common/Widgets/Carousel/Carousel';
import { PartnerItem, Partners } from './Data/Partners';
import { Stats, StatsItem } from './Data/Stats';
import { Categories, CategoryItem } from './Data/Categories';
import { ValueItem, Values } from './Data/Values';
import { LandingCarouselComponent } from '@App/Common/Widgets/LandingCarousel/LandingCarousel';
import { AppConfig } from '@App/Base/AppConfig';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
	standalone: true,
	templateUrl: './Home.html',
	styleUrls: ['Home.scss'],
	imports: [FormsModule, CommonModule, RouterModule, LandingCarouselComponent, CarouselComponent, TranslateModule],
})
export class HomeComponent implements OnInit {
	RoutePaths = RoutePaths;

	Stats: StatsItem[] = Stats;
	Values: ValueItem[] = Values;
	Categories: CategoryItem[] = Categories;
	Partners: PartnerItem[] = Partners;
	PartnersImages: string[] = Partners.map(p => p.ImgSrc);
	PortfolioLink!: string;
	constructor(private Router: Router, private AppConfig: AppConfig, private TranslateService: TranslateService) { }

	ngOnInit(): void {
		this.PortfolioLink = this.AppConfig.env.PortfolioLink;


	}

	ngAfterViewInit() {
		this.Animation.LandingText();
		this.Animation.About();
		this.Animation.Stat();
		this.Animation.Categories();
		this.Animation.Values();
		this.Animation.Partners();

		// to change stats numbers after in app language change
		this.Translation.Stat();
	}

	Animation = {
		LandingText: () => {
			// const landingText = document.querySelector('.landing-text')!;
			// landingText.classList.remove('landing-text-transition');
			// const landingTextObserver = new IntersectionObserver(entries => {
			// 	entries.forEach(entry => {
			// 		if (entry.isIntersecting) {
			// 			landingText.classList.add('landing-text-transition');
			// 			return;
			// 		}

			// 		landingText.classList.remove('landing-text-transition');
			// 	});
			// });
			// landingTextObserver.observe(landingText);
		},

		About: () => {
			const about = document.querySelector('.about')!;
			about.classList.remove('about-transition');
			const aboutObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						about.classList.add('about-transition');
						return;
					}

					about.classList.remove('about-transition');
				});
			});
			aboutObserver.observe(about);
		},

		Stat: () => {
			const observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						animateNumber(entry.target);
						// remove if you want it to repeat it on scroll again
						observer.unobserve(entry.target);
					}
				});
			});
			const stats = document.querySelectorAll('.stat');
			stats.forEach(stat => observer.observe(stat));

			const animateNumber = (element: any) => {
				return new Promise<void>(resolve => {
					const numberElement = element.querySelector('.number');
					const targetNumber = parseInt(numberElement.getAttribute('number'));
					const targetTimeInterval = parseInt(numberElement.getAttribute('timeinterval'));
					// console.log(targetNumber);

					let currentNumber = 0;
					const interval = setInterval(() => {
						if (!targetNumber) {
							numberElement.innerText = numberElement.getAttribute('number');
							clearInterval(interval);
							resolve();
							return
						}
						if (numberElement.id == 3) {
							currentNumber = currentNumber + 100;
						} else if (numberElement.id == 1) {
							currentNumber = currentNumber + 10;
						} else {
							currentNumber++;
						}
						numberElement.innerText = currentNumber;
						if (currentNumber >= targetNumber) {
							if (numberElement.id != 4) {
								numberElement.innerText += '+';
								// add the translated stat
								numberElement.innerText = this.TranslateService.instant(numberElement.innerText);
							}
							clearInterval(interval);
							resolve();
						}
					}, targetTimeInterval);
				});
			}
		},


		Categories: () => {
			// categories list one by one
			const categories = document.querySelectorAll('.category')!;
			categories.forEach(category => {
				// console.log(category);
				category.classList.remove('category-transition');

				const observer = new IntersectionObserver(entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							category.classList.add('category-transition');
							return;
						}
						category.classList.remove('category-transition');
					});
				});

				observer.observe(category);
			})

			// categories description in stationary section
			// const categoriesDesc = document.querySelector('.own-description')!;

			// categoriesDesc.classList.remove('typing-effect');
			// const aboutObserver = new IntersectionObserver(entries => {
			// 	entries.forEach(entry => {
			// 		if (entry.isIntersecting) {
			// 			categoriesDesc.classList.add('typing-effect');
			// 			return;
			// 		}

			// 		categoriesDesc.classList.remove('typing-effect');
			// 	});
			// });
			// aboutObserver.observe(categoriesDesc);

			// categories description in stationary section
			const categoriesDesc = document.querySelector('.own-description')!;

			categoriesDesc.classList.remove('category-transition');
			const aboutObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						categoriesDesc.classList.add('category-transition');
						return;
					}

					categoriesDesc.classList.remove('category-transition');
				});
			});
			aboutObserver.observe(categoriesDesc);
		},

		Values: () => {
			const values = document.querySelector('.values')!;
			values.classList.remove('values-transition');
			const valuesObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						values.classList.add('values-transition');
						return;
					}

					values.classList.remove('values-transition');
				});
			});
			valuesObserver.observe(values);
		},

		Partners: () => {
			const partners = document.querySelector('.partners')!;
			partners.classList.remove('partners-transition');
			const partnersObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						partners.classList.add('partners-transition');
						return;
					}

					partners.classList.remove('partners-transition');
				});
			});
			partnersObserver.observe(partners);
		}
	}

	Translation = {
		Stat: () => {
			this.TranslateService.onLangChange.subscribe((event: LangChangeEvent) => {
				const stats = document.querySelectorAll('.stat');
				stats.forEach(stat => {
					const numberElement: any = stat.querySelector('.number');
					const targetNumber = numberElement.getAttribute('number');
					numberElement.innerText = this.TranslateService.instant(targetNumber);
				});
			});
		},
	}

	GotoStat(link: string) {
		if (!link) return
		this.Router.navigateByUrl(link)
	}
}
