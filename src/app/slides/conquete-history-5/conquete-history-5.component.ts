import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-5',
  templateUrl: './conquete-history-5.component.html',
  styleUrls: ['./conquete-history-5.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
