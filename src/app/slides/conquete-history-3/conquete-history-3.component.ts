import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-3',
  templateUrl: './conquete-history-3.component.html',
  styleUrls: ['./conquete-history-3.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
