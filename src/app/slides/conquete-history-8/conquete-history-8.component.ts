import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-8',
  templateUrl: './conquete-history-8.component.html',
  styleUrls: ['./conquete-history-8.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory8Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
