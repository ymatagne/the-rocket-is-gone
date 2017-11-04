import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-container-2',
  templateUrl: './container-2.component.html',
  styleUrls: ['./container-2.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Container2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
