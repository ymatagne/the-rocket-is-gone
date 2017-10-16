import { Routes, RouterModule } from '@angular/router';
import { ConqueteHistory1Component } from './slides/conquete-history-1/conquete-history-1.component';
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
    { path: 'home', component: HomeComponent },
    { path: 'about-me', component: AboutmeComponent },
    { path: 'conquete-history-1', component: ConqueteHistory1Component },
    { path: 'questions', component: QuestionsComponent },
    { path: 'end', component: EndComponent }

];

export const Routing = RouterModule.forRoot(routes);