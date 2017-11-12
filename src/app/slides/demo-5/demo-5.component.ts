import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';
@Component({
  selector: 'app-demo-5',
  templateUrl: './demo-5.component.html',
  styleUrls: ['./demo-5.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Demo5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
