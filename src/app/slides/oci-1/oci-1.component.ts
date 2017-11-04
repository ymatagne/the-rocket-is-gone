import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-oci-1',
  templateUrl: './oci-1.component.html',
  styleUrls: ['./oci-1.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Oci1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
