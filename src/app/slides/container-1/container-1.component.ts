import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-container-1',
  templateUrl: './container-1.component.html',
  styleUrls: ['./container-1.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Container1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
