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
import { ConqueteHistory2Component } from './slides/conquete-history-2/conquete-history-2.component';
import { ConqueteHistory3Component } from './slides/conquete-history-3/conquete-history-3.component';
import { ConqueteHistory4Component } from './slides/conquete-history-4/conquete-history-4.component';
import { ConqueteHistory5Component } from './slides/conquete-history-5/conquete-history-5.component';
import { Container1Component } from './slides/container-1/container-1.component';
import { Container2Component } from './slides/container-2/container-2.component';
import { Container3Component } from './slides/container-3/container-3.component';
import { Return1Component } from './slides/return-1/return-1.component';
import { Devops1Component } from './slides/devops-1/devops-1.component';
import { Devops2Component } from './slides/devops-2/devops-2.component';
import { Devops3Component } from './slides/devops-3/devops-3.component';
import { Devops4Component } from './slides/devops-4/devops-4.component';
import { Devops5Component } from './slides/devops-5/devops-5.component';
import { Agility1Component } from './slides/agility-1/agility-1.component';
import { Agility2Component } from './slides/agility-2/agility-2.component';
import { Agility3Component } from './slides/agility-3/agility-3.component';
import { Agility4Component } from './slides/agility-4/agility-4.component';
import { Agility5Component } from './slides/agility-5/agility-5.component';
import { Container4Component } from './slides/container-4/container-4.component';
import { Container5Component } from './slides/container-5/container-5.component';
import { Orchestrateur1Component } from './slides/orchestrateur-1/orchestrateur-1.component';
import { Orchestrateur2Component } from './slides/orchestrateur-2/orchestrateur-2.component';
import { Orchestrateur3Component } from './slides/orchestrateur-3/orchestrateur-3.component';
import { Orchestrateur4Component } from './slides/orchestrateur-4/orchestrateur-4.component';
import { ConqueteHistory6Component } from './slides/conquete-history-6/conquete-history-6.component';
import { ConqueteHistory7Component } from './slides/conquete-history-7/conquete-history-7.component';
import { ConqueteHistory8Component } from './slides/conquete-history-8/conquete-history-8.component';
import { ConqueteHistory9Component } from './slides/conquete-history-9/conquete-history-9.component';
import { ConqueteHistory10Component } from './slides/conquete-history-10/conquete-history-10.component';
import { ConqueteHistory11Component } from './slides/conquete-history-11/conquete-history-11.component';
import { ConqueteHistory12Component } from './slides/conquete-history-12/conquete-history-12.component';
import { ConqueteHistory13Component } from './slides/conquete-history-13/conquete-history-13.component';
import { ConqueteHistory14Component } from './slides/conquete-history-14/conquete-history-14.component';
import { ConqueteHistory15Component } from './slides/conquete-history-15/conquete-history-15.component';
import { ConqueteHistory16Component } from './slides/conquete-history-16/conquete-history-16.component';
import { Container6Component } from './slides/container-6/container-6.component';
import { Container7Component } from './slides/container-7/container-7.component';
import { Container8Component } from './slides/container-8/container-8.component';
import { Container9Component } from './slides/container-9/container-9.component';
import { Oci1Component } from './slides/oci-1/oci-1.component';
import { MobyComponent } from './slides/moby/moby.component';
import { Container10Component } from './slides/container-10/container-10.component';
import { Oci2Component } from './slides/oci-2/oci-2.component';
import { Orchestrateur5Component } from './slides/orchestrateur-5/orchestrateur-5.component';
import { Orchestrateur6Component } from './slides/orchestrateur-6/orchestrateur-6.component';
import { Orchestrateur7Component } from './slides/orchestrateur-7/orchestrateur-7.component';
import { Orchestrateur8Component } from './slides/orchestrateur-8/orchestrateur-8.component';
import { Agility6Component } from './slides/agility-6/agility-6.component';

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
    EndComponent,
    ConqueteHistory2Component,
    ConqueteHistory3Component,
    ConqueteHistory4Component,
    ConqueteHistory5Component,
    Container1Component,
    Container2Component,
    Container3Component,
    Return1Component,
    Devops1Component,
    Devops2Component,
    Devops3Component,
    Devops4Component,
    Devops5Component,
    Agility1Component,
    Agility2Component,
    Agility3Component,
    Agility4Component,
    Agility5Component,
    Container4Component,
    Container5Component,
    Orchestrateur1Component,
    Orchestrateur2Component,
    Orchestrateur3Component,
    Orchestrateur4Component,
    ConqueteHistory6Component,
    ConqueteHistory7Component,
    ConqueteHistory8Component,
    ConqueteHistory9Component,
    ConqueteHistory10Component,
    ConqueteHistory11Component,
    ConqueteHistory12Component,
    ConqueteHistory13Component,
    ConqueteHistory14Component,
    ConqueteHistory15Component,
    ConqueteHistory16Component,
    Container6Component,
    Container7Component,
    Container8Component,
    Container9Component,
    Oci1Component,
    MobyComponent,
    Container10Component,
    Oci2Component,
    Orchestrateur5Component,
    Orchestrateur6Component,
    Orchestrateur7Component,
    Orchestrateur8Component,
    Agility6Component,
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
