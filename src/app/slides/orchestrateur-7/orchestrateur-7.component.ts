import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-orchestrateur-7',
  templateUrl: './orchestrateur-7.component.html',
  styleUrls: ['./orchestrateur-7.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Orchestrateur7Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
