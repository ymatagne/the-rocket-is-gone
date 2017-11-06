import { Routes, RouterModule } from '@angular/router';
import { ConqueteHistory1Component } from './slides/conquete-history-1/conquete-history-1.component';
import { ConqueteHistory2Component } from './slides/conquete-history-2/conquete-history-2.component';
import { ConqueteHistory3Component } from './slides/conquete-history-3/conquete-history-3.component';
import { ConqueteHistory4Component } from './slides/conquete-history-4/conquete-history-4.component';
import { ConqueteHistory5Component } from './slides/conquete-history-5/conquete-history-5.component';
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
import { Container1Component } from './slides/container-1/container-1.component';
import { Container2Component } from './slides/container-2/container-2.component';
import { Container3Component } from './slides/container-3/container-3.component';
import { Container4Component } from './slides/container-4/container-4.component';
import { Container5Component } from './slides/container-5/container-5.component';
import { Container6Component } from './slides/container-6/container-6.component';
import { Container7Component } from './slides/container-7/container-7.component';
import { Container8Component } from './slides/container-8/container-8.component';
import { Container9Component } from './slides/container-9/container-9.component';
import { Container10Component } from './slides/container-10/container-10.component';
import { Oci1Component } from './slides/oci-1/oci-1.component';
import { Oci2Component } from './slides/oci-2/oci-2.component';
import { MobyComponent } from './slides/moby/moby.component';
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
import { Agility6Component } from './slides/agility-6/agility-6.component';
import { Orchestrateur1Component } from './slides/orchestrateur-1/orchestrateur-1.component';
import { Orchestrateur2Component } from './slides/orchestrateur-2/orchestrateur-2.component';
import { Orchestrateur3Component } from './slides/orchestrateur-3/orchestrateur-3.component';
import { Orchestrateur4Component } from './slides/orchestrateur-4/orchestrateur-4.component';
import { Orchestrateur5Component } from './slides/orchestrateur-5/orchestrateur-5.component';
import { Orchestrateur6Component } from './slides/orchestrateur-6/orchestrateur-6.component';
import { Orchestrateur7Component } from './slides/orchestrateur-7/orchestrateur-7.component';
import { Orchestrateur8Component } from './slides/orchestrateur-8/orchestrateur-8.component';
import { HomeComponent } from './slides/home/home.component';
import { AboutmeComponent } from './slides/aboutme/aboutme.component';
import { EndComponent } from './slides/end/end.component';
import { QuestionsComponent } from './slides/questions/questions.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'about-me', component: AboutmeComponent },
    { path: 'conquete-history-1', component: ConqueteHistory1Component },
    { path: 'conquete-history-2', component: ConqueteHistory2Component },
    { path: 'conquete-history-3', component: ConqueteHistory3Component },
    { path: 'conquete-history-4', component: ConqueteHistory4Component },
    { path: 'conquete-history-5', component: ConqueteHistory5Component },
    { path: 'conquete-history-6', component: ConqueteHistory6Component },
    { path: 'conquete-history-7', component: ConqueteHistory7Component },
    { path: 'conquete-history-8', component: ConqueteHistory8Component },
    { path: 'conquete-history-9', component: ConqueteHistory9Component },
    { path: 'conquete-history-10', component: ConqueteHistory10Component },
    { path: 'conquete-history-11', component: ConqueteHistory11Component },
    { path: 'conquete-history-12', component: ConqueteHistory12Component },
    { path: 'conquete-history-13', component: ConqueteHistory13Component },
    { path: 'conquete-history-14', component: ConqueteHistory14Component },
    { path: 'conquete-history-15', component: ConqueteHistory15Component },
    { path: 'conquete-history-16', component: ConqueteHistory16Component },
    { path: 'container-1', component: Container1Component },
    { path: 'container-2', component: Container2Component },
    { path: 'container-3', component: Container3Component },
    { path: 'container-4', component: Container4Component },
    { path: 'container-5', component: Container5Component },
    { path: 'container-6', component: Container6Component },
    { path: 'container-7', component: Container7Component },
    { path: 'container-8', component: Container8Component },
    { path: 'container-9', component: Container9Component },
    { path: 'container-10', component: Container10Component },
    { path: 'oci-1', component: Oci1Component },
    { path: 'oci-2', component: Oci2Component },
    { path: 'moby', component: MobyComponent },
    { path: 'orchestrateur-1', component: Orchestrateur1Component },
    { path: 'orchestrateur-2', component: Orchestrateur2Component },
    { path: 'orchestrateur-3', component: Orchestrateur3Component },
    { path: 'orchestrateur-4', component: Orchestrateur4Component },
    { path: 'orchestrateur-5', component: Orchestrateur5Component },
    { path: 'orchestrateur-6', component: Orchestrateur6Component },
    { path: 'orchestrateur-7', component: Orchestrateur7Component },
    { path: 'orchestrateur-8', component: Orchestrateur8Component },
    { path: 'return-1', component: Return1Component },
    { path: 'devops-1', component: Devops1Component },
    { path: 'devops-2', component: Devops2Component },
    { path: 'devops-3', component: Devops3Component },
    { path: 'devops-4', component: Devops4Component },
    { path: 'devops-5', component: Devops5Component },
    { path: 'agility-1', component: Agility1Component },
    { path: 'agility-2', component: Agility2Component },
    { path: 'agility-3', component: Agility3Component },
    { path: 'agility-4', component: Agility4Component },
    { path: 'agility-5', component: Agility5Component },
    { path: 'agility-6', component: Agility6Component },   
    { path: 'questions', component: QuestionsComponent },
    { path: 'end', component: EndComponent }

];

export const Routing = RouterModule.forRoot(routes);