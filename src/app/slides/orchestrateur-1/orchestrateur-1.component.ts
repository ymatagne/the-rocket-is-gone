import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-orchestrateur-1',
  templateUrl: './orchestrateur-1.component.html',
  styleUrls: ['./orchestrateur-1.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Orchestrateur1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
