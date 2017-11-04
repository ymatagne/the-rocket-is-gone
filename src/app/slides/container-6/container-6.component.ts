import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-container-6',
  templateUrl: './container-6.component.html',
  styleUrls: ['./container-6.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Container6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
