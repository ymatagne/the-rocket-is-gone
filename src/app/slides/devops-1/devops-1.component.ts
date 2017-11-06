import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-devops-1',
  templateUrl: './devops-1.component.html',
  styleUrls: ['./devops-1.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Devops1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
