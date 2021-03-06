import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CataloguePageComponent } from './catalogue-page/catalogue-page.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CataloguePageComponent,
    TrainerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
