import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-conquete-history-4',
  templateUrl: './conquete-history-4.component.html',
  styleUrls: ['./conquete-history-4.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ConqueteHistory4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
