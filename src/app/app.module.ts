import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './slides/aboutme/aboutme.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routing } from './app.routes';
import { HomeComponent } from './slides/home/home.component';

import { DisplayService } from './services/display.service';
import { LiftComponent } from './lift/lift.component';
import { ConqueteHistory1Component } from './slides/conquete-history-1/conquete-history-1.component';
import { QuestionsComponent } from './slides/questions/questions.component';
import { EndComponent } from './slides/end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LiftComponent,
    ConqueteHistory1Component,
    QuestionsComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Routing
  ],
  providers: [DisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
