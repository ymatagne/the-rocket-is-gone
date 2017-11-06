import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-devops-5',
  templateUrl: './devops-5.component.html',
  styleUrls: ['./devops-5.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Devops5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
