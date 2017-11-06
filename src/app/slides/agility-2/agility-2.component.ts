import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-agility-2',
  templateUrl: './agility-2.component.html',
  styleUrls: ['./agility-2.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Agility2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
