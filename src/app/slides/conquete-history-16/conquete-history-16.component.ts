import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-16',
  templateUrl: './conquete-history-16.component.html',
  styleUrls: ['./conquete-history-16.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory16Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
