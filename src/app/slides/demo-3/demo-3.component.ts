import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';
@Component({
  selector: 'app-demo-3',
  templateUrl: './demo-3.component.html',
  styleUrls: ['./demo-3.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Demo3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
