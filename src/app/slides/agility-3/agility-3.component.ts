import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-agility-3',
  templateUrl: './agility-3.component.html',
  styleUrls: ['./agility-3.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Agility3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
