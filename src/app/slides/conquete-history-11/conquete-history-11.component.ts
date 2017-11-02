import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-11',
  templateUrl: './conquete-history-11.component.html',
  styleUrls: ['./conquete-history-11.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory11Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
