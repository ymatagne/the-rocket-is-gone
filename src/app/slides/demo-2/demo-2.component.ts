import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';
@Component({
  selector: 'app-demo-2',
  templateUrl: './demo-2.component.html',
  styleUrls: ['./demo-2.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Demo2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
