import { Component, OnInit } from '@angular/core';

import { DisplayService } from '../services/display.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public displayHeader: boolean;
  
  constructor(private displayService: DisplayService) { }
  
  ngOnInit() {
    this.displayService.showHeader().subscribe(value => this.displayHeader = value);    
  }

}
