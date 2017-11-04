import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-container-4',
  templateUrl: './container-4.component.html',
  styleUrls: ['./container-4.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Container4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
