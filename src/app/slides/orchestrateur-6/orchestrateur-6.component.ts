import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-orchestrateur-6',
  templateUrl: './orchestrateur-6.component.html',
  styleUrls: ['./orchestrateur-6.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Orchestrateur6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
