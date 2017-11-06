import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-devops-2',
  templateUrl: './devops-2.component.html',
  styleUrls: ['./devops-2.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Devops2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
