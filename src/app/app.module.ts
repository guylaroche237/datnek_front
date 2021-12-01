
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
/* import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core'; */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { TranslatePipe } from './translate/translate.pipe';
import { TRANSLATION_PROVIDERS } from './translate/translation';
import { TranslateService } from './translate/translate.service';
import { UserProviderService } from './provider/user-provider.service';
import { FormsModule } from '@angular/forms';
import { GlobalService } from './provider/global.service';
import { UsersComponent } from './view/users/users.component';
//import { UserProviderService } from './provider/user-provider.service';


//import { UserProviderService } from './provider/user-provider.service';





/* export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
  
} */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    TranslatePipe,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   /*  TranslateModule.forRoot({
      defaultLanguage: 'en-US',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
  
  }) */
  ],
  providers: [TRANSLATION_PROVIDERS,TranslateService,UserProviderService,GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
