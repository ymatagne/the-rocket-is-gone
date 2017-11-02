import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-10',
  templateUrl: './conquete-history-10.component.html',
  styleUrls: ['./conquete-history-10.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory10Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
