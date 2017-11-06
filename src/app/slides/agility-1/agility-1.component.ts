import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-agility-1',
  templateUrl: './agility-1.component.html',
  styleUrls: ['./agility-1.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Agility1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
