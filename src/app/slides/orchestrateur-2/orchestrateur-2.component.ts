import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-orchestrateur-2',
  templateUrl: './orchestrateur-2.component.html',
  styleUrls: ['./orchestrateur-2.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Orchestrateur2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
