import { AppConfig } from '@App/Base/AppConfig';
import { SidebarAnimationService } from '@App/Common/Services/SidebarAnimation.Service';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { ArtCategories, ArtCategory } from '@App/Features/Art/Data/Arts';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export class Link {
	Title!: string;
	Link!: string;
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
	// @ViewChild('dropdownMenuDeft') dropdownMenuDeft!: ElementRef;

	PortfolioLink!: string;

	AvailableLanguages: Language[] = [{ Name: 'English', Key: 'en' }, { Name: 'Arabic', Key: 'ar' }]

	ArtCategories: ArtCategory[] = ArtCategories;

	DeftCategories: ArtCategory[] = []

	constructor(
		private Animation: SidebarAnimationService,
		private AppConfig: AppConfig,
		private TranslateService: TranslateService
	) { }

	ngOnInit(): void {
		this.PortfolioLink = this.AppConfig.env.PortfolioLink;
	}

	toggleDropdown(event: MouseEvent, dropdown: string) {
		if (dropdown == 'dropdownMenu') {
			const dropdownMenuElement = this.dropdownMenu.nativeElement as HTMLElement;
			// const secdropdownMenuElement = this.dropdownMenuDeft.nativeElement as HTMLElement;
			if (dropdownMenuElement.style.display === 'block') {
				dropdownMenuElement.style.display = 'none';
				document.getElementById('dropdownMenuLink')?.classList.remove('show');

			} else {
				dropdownMenuElement.style.display = 'block';
				// secdropdownMenuElement.style.display = 'none';
				document.getElementById('dropdownMenuLinkDeft')?.classList.remove('show');
				document.getElementById('dropdownMenuLink')?.classList.add('show');
			}
		} else {
			// const dropdownMenuElement = this.dropdownMenuDeft.nativeElement as HTMLElement;
			// const secdropdownMenuElement = this.dropdownMenu.nativeElement as HTMLElement;

			// if (dropdownMenuElement.style.display === 'block') {
			// 	dropdownMenuElement.style.display = 'none';
			// 	document.getElementById('dropdownMenuLinkDeft')?.classList.remove('show');

			// } else {
			// 	dropdownMenuElement.style.display = 'block';
			// 	secdropdownMenuElement.style.display = 'none';
			// 	document.getElementById('dropdownMenuLink')?.classList.remove('show');
			// 	document.getElementById('dropdownMenuLinkDeft')?.classList.add('show');

			// }
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
		this.TranslateService.use(language);
	}
}
