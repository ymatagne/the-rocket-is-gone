import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-tools-1',
  templateUrl: './tools-1.component.html',
  styleUrls: ['./tools-1.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Tools1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
