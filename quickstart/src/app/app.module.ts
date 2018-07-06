import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home.component';
import { AboutUsComponent } from './component/aboutUs.component';
import { ContactUsComponent } from './component/contactUs.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
];


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, HomeComponent, AboutUsComponent, ContactUsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
