import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-moby',
  templateUrl: './moby.component.html',
  styleUrls: ['./moby.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class MobyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
