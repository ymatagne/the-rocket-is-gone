import { Component, OnInit } from '@angular/core';

import { DisplayService } from '../services/display.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public displayHeader: boolean;
  constructor(private displayService: DisplayService) { }

  ngOnInit() {
    this.displayService.showHeader().subscribe(value => this.displayHeader = value);
  }

}
