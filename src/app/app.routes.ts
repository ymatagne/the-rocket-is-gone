import { Routes, RouterModule } from '@angular/router';
import { ConqueteHistory1Component } from './slides/conquete-history-1/conquete-history-1.component';
import { ConqueteHistory2Component } from './slides/conquete-history-2/conquete-history-2.component';
import { ConqueteHistory3Component } from './slides/conquete-history-3/conquete-history-3.component';
import { ConqueteHistory4Component } from './slides/conquete-history-4/conquete-history-4.component';
import { ConqueteHistory5Component } from './slides/conquete-history-5/conquete-history-5.component';
import { Container1Component } from './slides/container-1/container-1.component';
import { Container2Component } from './slides/container-2/container-2.component';
import { Container3Component } from './slides/container-3/container-3.component';
import { Container4Component } from './slides/container-4/container-4.component';
import { Container5Component } from './slides/container-5/container-5.component';
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
import { Norme1Component } from './slides/norme-1/norme-1.component';
import { Norme2Component } from './slides/norme-2/norme-2.component';
import { Rkt1Component } from './slides/rkt-1/rkt-1.component';
import { Rkt2Component } from './slides/rkt-2/rkt-2.component';
import { Rkt3Component } from './slides/rkt-3/rkt-3.component';
import { Orchestrateur1Component } from './slides/orchestrateur-1/orchestrateur-1.component';
import { Orchestrateur2Component } from './slides/orchestrateur-2/orchestrateur-2.component';
import { Orchestrateur3Component } from './slides/orchestrateur-3/orchestrateur-3.component';
import { Orchestrateur4Component } from './slides/orchestrateur-4/orchestrateur-4.component';
import { HomeComponent } from './slides/home/home.component';
import { AboutmeComponent } from './slides/aboutme/aboutme.component';
import { EndComponent } from './slides/end/end.component';
import { DemoComponent } from './slides/demo/demo.component';
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
    { path: 'container-1', component: Container1Component },
    { path: 'container-2', component: Container2Component },
    { path: 'container-3', component: Container3Component },
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
    { path: 'container-4', component: Container4Component },
    { path: 'container-5', component: Container5Component },
    { path: 'norme-1', component: Norme1Component },
    { path: 'norme-2', component: Norme2Component },
    { path: 'rkt-1', component: Rkt1Component },
    { path: 'rkt-2', component: Rkt2Component },
    { path: 'rkt-3', component: Rkt3Component },
    { path: 'orchestrateur-1', component: Orchestrateur1Component },
    { path: 'orchestrateur-2', component: Orchestrateur2Component },
    { path: 'orchestrateur-3', component: Orchestrateur3Component },
    { path: 'orchestrateur-4', component: Orchestrateur4Component },
    { path: 'demo', component: DemoComponent },
    { path: 'questions', component: QuestionsComponent },
    { path: 'end', component: EndComponent }

];

export const Routing = RouterModule.forRoot(routes);