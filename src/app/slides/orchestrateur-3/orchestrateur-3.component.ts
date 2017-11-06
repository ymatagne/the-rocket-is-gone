import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-orchestrateur-3',
  templateUrl: './orchestrateur-3.component.html',
  styleUrls: ['./orchestrateur-3.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Orchestrateur3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
