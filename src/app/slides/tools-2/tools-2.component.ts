import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-tools-2',
  templateUrl: './tools-2.component.html',
  styleUrls: ['./tools-2.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Tools2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
