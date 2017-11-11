import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-os-1',
  templateUrl: './os-1.component.html',
  styleUrls: ['./os-1.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Os1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
