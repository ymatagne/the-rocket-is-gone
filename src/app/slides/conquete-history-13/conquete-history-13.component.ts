import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-13',
  templateUrl: './conquete-history-13.component.html',
  styleUrls: ['./conquete-history-13.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory13Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
