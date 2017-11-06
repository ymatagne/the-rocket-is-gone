import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-agility-6',
  templateUrl: './agility-6.component.html',
  styleUrls: ['./agility-6.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Agility6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
