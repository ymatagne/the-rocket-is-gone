import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fadein.animation';

@Component({
  selector: 'app-oci-2',
  templateUrl: './oci-2.component.html',
  styleUrls: ['./oci-2.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Oci2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
