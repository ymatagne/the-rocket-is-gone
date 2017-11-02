import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-7',
  templateUrl: './conquete-history-7.component.html',
  styleUrls: ['./conquete-history-7.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory7Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
