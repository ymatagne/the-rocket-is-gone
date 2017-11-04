import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-container-7',
  templateUrl: './container-7.component.html',
  styleUrls: ['./container-7.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Container7Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
