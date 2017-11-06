import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-devops-3',
  templateUrl: './devops-3.component.html',
  styleUrls: ['./devops-3.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Devops3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
