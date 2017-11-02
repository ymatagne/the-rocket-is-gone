import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-12',
  templateUrl: './conquete-history-12.component.html',
  styleUrls: ['./conquete-history-12.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory12Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
