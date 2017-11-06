import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-orchestrateur-4',
  templateUrl: './orchestrateur-4.component.html',
  styleUrls: ['./orchestrateur-4.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Orchestrateur4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
