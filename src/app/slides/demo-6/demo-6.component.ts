import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-demo-6',
  templateUrl: './demo-6.component.html',
  styleUrls: ['./demo-6.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Demo6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
