import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-os-3',
  templateUrl: './os-3.component.html',
  styleUrls: ['./os-3.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Os3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
