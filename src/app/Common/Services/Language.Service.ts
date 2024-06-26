import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
    public textDirection!: string;

    constructor(
        private RendererFactory: RendererFactory2,
        private TranslateService: TranslateService
    ) { }

    SetLanguageOnAppInit() {
        let browserLang = this.TranslateService.getBrowserLang()
        console.log(`browser's language: ${browserLang}`);
        localStorage.setItem('lang', browserLang ?? 'en')

        this.TranslateService.setDefaultLang('en');
        this.TranslateService.use(browserLang ?? this.TranslateService.defaultLang);
        this.SetDirection();
    }

    private SetDirection() {
        const lang = localStorage.getItem('lang');
        if (lang === 'ar') {
            this.textDirection = 'rtl';
        } else {
            this.textDirection = 'ltr';
        }
        const renderer = this.RendererFactory.createRenderer(null, null);
        renderer.setAttribute(document.body, 'dir', this.textDirection);
    }

    useLanguage(language: string): void {
        this.TranslateService.use(language);
        localStorage.setItem('lang', language)
        this.SetDirection()
    }
}
