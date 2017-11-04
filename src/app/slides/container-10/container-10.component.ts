import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-container-10',
  templateUrl: './container-10.component.html',
  styleUrls: ['./container-10.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Container10Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
