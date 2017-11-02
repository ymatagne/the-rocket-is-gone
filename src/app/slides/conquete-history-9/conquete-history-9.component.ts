import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-9',
  templateUrl: './conquete-history-9.component.html',
  styleUrls: ['./conquete-history-9.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory9Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
