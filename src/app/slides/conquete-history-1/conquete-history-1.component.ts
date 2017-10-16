import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-1',
  templateUrl: './conquete-history-1.component.html',
  styleUrls: ['./conquete-history-1.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
