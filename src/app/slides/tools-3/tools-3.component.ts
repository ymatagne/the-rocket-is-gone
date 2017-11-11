import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-tools-3',
  templateUrl: './tools-3.component.html',
  styleUrls: ['./tools-3.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Tools3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
