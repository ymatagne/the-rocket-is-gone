import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';
@Component({
  selector: 'app-demo-1',
  templateUrl: './demo-1.component.html',
  styleUrls: ['./demo-1.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Demo1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
