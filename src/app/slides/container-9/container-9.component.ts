import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-container-9',
  templateUrl: './container-9.component.html',
  styleUrls: ['./container-9.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Container9Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
