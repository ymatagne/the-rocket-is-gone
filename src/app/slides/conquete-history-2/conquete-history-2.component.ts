import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-2',
  templateUrl: './conquete-history-2.component.html',
  styleUrls: ['./conquete-history-2.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
