import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-os-2',
  templateUrl: './os-2.component.html',
  styleUrls: ['./os-2.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Os2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
