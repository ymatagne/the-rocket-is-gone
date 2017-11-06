import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-agility-5',
  templateUrl: './agility-5.component.html',
  styleUrls: ['./agility-5.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Agility5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
