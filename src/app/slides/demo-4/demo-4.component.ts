import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';
@Component({
  selector: 'app-demo-4',
  templateUrl: './demo-4.component.html',
  styleUrls: ['./demo-4.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Demo4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
