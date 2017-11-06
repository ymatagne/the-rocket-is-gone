import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-agility-4',
  templateUrl: './agility-4.component.html',
  styleUrls: ['./agility-4.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Agility4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
