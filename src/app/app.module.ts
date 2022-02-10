
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalService } from './provider/global.service';
import { UsersComponent } from './view/users/users.component';
import { NavBarComponent } from './view/nav-bar/nav-bar.component';
import { ListLanguageComponent } from './view/list-language/list-language.component';
import { ListItemComponent } from './view/list-item/list-item.component';
import { LanguageFormComponent } from './view/language-form/language-form.component';
import { DetailComponent } from './view/detail/detail.component';
import { UserComponent } from './view/users/user/user.component';
import { UserDetailComponent } from './view/users/user-detail/user-detail.component';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './ngxs/users/users.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
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
    UsersComponent,
    NavBarComponent,
    ListLanguageComponent,
    ListItemComponent,
    LanguageFormComponent,
    DetailComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([UserState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
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
