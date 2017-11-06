import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-devops-4',
  templateUrl: './devops-4.component.html',
  styleUrls: ['./devops-4.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Devops4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
