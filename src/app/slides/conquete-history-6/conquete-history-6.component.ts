import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-6',
  templateUrl: './conquete-history-6.component.html',
  styleUrls: ['./conquete-history-6.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
