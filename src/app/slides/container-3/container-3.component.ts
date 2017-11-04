import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-container-3',
  templateUrl: './container-3.component.html',
  styleUrls: ['./container-3.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Container3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
