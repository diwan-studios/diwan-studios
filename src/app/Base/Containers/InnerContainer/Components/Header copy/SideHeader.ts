import { AppConfig } from '@App/Base/AppConfig';
import { LanguageService } from '@App/Common/Services/Language.Service';
import { SidebarAnimationService } from '@App/Common/Services/SidebarAnimation.Service';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

export class Link {
	Title!: string;
	Link!: string;
}

export class ArtCategory {
	Title!: string;
	ImgSrc!: string;
	ImgAlt!: string;
	Links!: Link[];
}

export class Language {
	Name!: string;
	Key!: string;
}
@Component({
	selector: 'app-side-header',
	templateUrl: './SideHeader.html',
	styleUrls: ['./SideHeader.scss'],
})
export class SideHeaderComponent implements OnInit {
	RoutePaths = RoutePaths;
	regex = /\s/g;
	@ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
	@ViewChild('dropdownMenuDeft') dropdownMenuDeft!: ElementRef;

	PortfolioLink!: string;

	AvailableLanguages: Language[] = [{ Name: 'English', Key: 'en' }, { Name: 'Arabic', Key: 'ar' }]

	constructor(
		private Animation: SidebarAnimationService,
		private AppConfig: AppConfig,
		private LanguageService: LanguageService
	) { }

	ngOnInit(): void {
		this.PortfolioLink = this.AppConfig.env.PortfolioLink;
	}

	ArtCategories: ArtCategory[] = [
		{
			Title: 'Offices & Factories',
			ImgAlt: '',
			ImgSrc: 'assets/Images/Projects/mondelez/mondelez3.webp',
			Links: [
				{
					Title: 'ORANGE',
					Link: `${RoutePaths.ArtWorks}/OfficesandFactories/orange`
				},
				{
					Title: 'MONDELEZ',
					Link: `${RoutePaths.ArtWorks}/OfficesandFactories/mondelez`
				},
				{
					Title: 'CAREEM',
					Link: `${RoutePaths.ArtWorks}/OfficesandFactories/careem`
				},
				{
					Title: 'MONEY FELLOWS',
					Link: `${RoutePaths.ArtWorks}/OfficesandFactories/moneyfellows`
				},
				{
					Title: 'VIRTUAL QUEST',
					Link: `${RoutePaths.ArtWorks}/OfficesandFactories/virtualquest`
				},
				{
					Title: 'GTE',
					Link: `${RoutePaths.ArtWorks}/OfficesandFactories/gte`
				}
			]
		}, {
			Title: 'Restaurants',
			ImgAlt: '',
			ImgSrc: 'assets/Images/Projects/taiyaki/taiyaki2.webp',
			Links: [
				{
					Title: 'BONITA',
					Link: `${RoutePaths.ArtWorks}/Restaurants/bonita`
				},
				{
					Title: 'TAIYAKI',
					Link: `${RoutePaths.ArtWorks}/Restaurants/taiyaki`
				},
				{
					Title: 'BUTCHER\'S BURGER',
					Link: `${RoutePaths.ArtWorks}/Restaurants/butchersburger`
				}, {
					Title: 'KANSES',
					Link: `${RoutePaths.ArtWorks}/Restaurants/kanses`
				},
				{
					Title: 'MORI SUSHI',
					Link: `${RoutePaths.ArtWorks}/Restaurants/morisushi`
				}
			]
		}, {
			Title: 'Malls',
			ImgAlt: '',
			ImgSrc: 'assets/Images/Projects/rubix-park/rubix2.webp',
			Links: [
				{
					Title: 'RUBIX PARK',
					Link: `${RoutePaths.ArtWorks}/Malls/rubixpark`
				},
				{
					Title: 'GLEEM BAY',
					Link: `${RoutePaths.ArtWorks}/Malls/gleembay`
				},
				{
					Title: 'TIO COMPLEX',
					Link: `${RoutePaths.ArtWorks}/Malls/tiocomplex`
				}
			]
		}, {
			Title: 'Showrooms',
			ImgAlt: '',
			ImgSrc: 'assets/Images/Projects/Pro-guys/pro3.webp',
			Links: [
				{
					Title: 'PRO GUYS',
					Link: `${RoutePaths.ArtWorks}/Showrooms/proguys`
				},
				{
					Title: 'SEATS',
					Link: `${RoutePaths.ArtWorks}/Showrooms/seats`
				}
			]
		},
		{
			Title: 'Entertainments',
			ImgAlt: '',
			ImgSrc: 'assets/Images/Projects/lane9/lane8.webp',
			Links: [
				{
					Title: 'LANE 9',
					Link: `${RoutePaths.ArtWorks}/Entertainments/lane9`
				}
			]
		}


	]

	DeftCategories: ArtCategory[] = [
		{
			Title: 'Painting',
			ImgAlt: '',
			ImgSrc: 'assets/Images/Deft/Painting/painting1.webp',
			Links: []
		},
		// {
		// 	Title: 'Sculptures',
		// 	ImgAlt: 'Sculptures alt',
		// 	ImgSrc: '',
		// 	Links: [

		// 	]
		// }



	]

	toggleDropdown(event: MouseEvent, dropdown: string) {
		if (dropdown == 'dropdownMenu') {
			const dropdownMenuElement = this.dropdownMenu.nativeElement as HTMLElement;
			const secdropdownMenuElement = this.dropdownMenuDeft.nativeElement as HTMLElement;
			if (dropdownMenuElement.style.display === 'block') {
				dropdownMenuElement.style.display = 'none';
				document.getElementById('dropdownMenuLink')?.classList.remove('show');

			} else {
				dropdownMenuElement.style.display = 'block';
				secdropdownMenuElement.style.display = 'none';
				document.getElementById('dropdownMenuLinkDeft')?.classList.remove('show');
				document.getElementById('dropdownMenuLink')?.classList.add('show');



			}
		} else {
			const dropdownMenuElement = this.dropdownMenuDeft.nativeElement as HTMLElement;
			const secdropdownMenuElement = this.dropdownMenu.nativeElement as HTMLElement;

			if (dropdownMenuElement.style.display === 'block') {
				dropdownMenuElement.style.display = 'none';
				document.getElementById('dropdownMenuLinkDeft')?.classList.remove('show');

			} else {
				dropdownMenuElement.style.display = 'block';
				secdropdownMenuElement.style.display = 'none';
				document.getElementById('dropdownMenuLink')?.classList.remove('show');
				document.getElementById('dropdownMenuLinkDeft')?.classList.add('show');

			}
		}

		event.stopPropagation(); // Prevent event bubbling to parent elements
	}

	closemenu() {
		this.Animation.ScrollUp();
		this.Animation.animationflag = false;
		this.Animation.transform();
	}
	back() {
		this.Animation.animationflag = false;
		this.Animation.transform();

	}

	useLanguage(language: string): void {
		this.LanguageService.useLanguage(language);
	}
}
