import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-orchestrateur-5',
  templateUrl: './orchestrateur-5.component.html',
  styleUrls: ['./orchestrateur-5.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Orchestrateur5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
