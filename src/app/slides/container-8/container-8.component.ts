import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-container-8',
  templateUrl: './container-8.component.html',
  styleUrls: ['./container-8.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Container8Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
