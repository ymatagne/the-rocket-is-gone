import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-15',
  templateUrl: './conquete-history-15.component.html',
  styleUrls: ['./conquete-history-15.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory15Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
