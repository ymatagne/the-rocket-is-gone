import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-container-5',
  templateUrl: './container-5.component.html',
  styleUrls: ['./container-5.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Container5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
