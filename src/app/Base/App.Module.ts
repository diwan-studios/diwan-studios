import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './App.Component';
import { RouterModule } from '@angular/router';
import { routes } from './App.Routes';
import { PreLoaderComponent } from '@App/Common/Widgets/Spinners/PreLoader/PreLoader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppConfig } from './AppConfig';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    PreLoaderComponent,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (appConfig: AppConfig) => () => appConfig.LoadAppConfig(),
      multi: true,
      deps: [AppConfig]
    },
    AppConfig,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}