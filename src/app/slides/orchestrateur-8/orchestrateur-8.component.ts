import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-orchestrateur-8',
  templateUrl: './orchestrateur-8.component.html',
  styleUrls: ['./orchestrateur-8.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Orchestrateur8Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
