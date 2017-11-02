import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-14',
  templateUrl: './conquete-history-14.component.html',
  styleUrls: ['./conquete-history-14.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory14Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
