import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../services/display.service'
import { rocketTranslateAnimation } from '../animations/rocketTranslate.animation';

@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  styleUrls: ['./lift.component.css'],
  animations: [rocketTranslateAnimation],
})
export class LiftComponent implements OnInit {

  private displayHeader: boolean;

  public bottom: string = "0%";

  public numbers = [];

  public nbrOfSlide: number;
  constructor(private displayService: DisplayService) {
    this.nbrOfSlide = this.displayService.nbrSlide;
    this.numbers = new Array(this.nbrOfSlide);
  }

  ngOnInit() {
    this.displayService.showHeader().subscribe(value => this.displayHeader = value);
    this.displayService.getCompletion().subscribe(value => this.bottom = value + "%");
  }

  getBottom(index) {
    let bottomValue = ((index + 1) * 90) / (this.nbrOfSlide - 1)
    return bottomValue + "%";
  }

  displayPoint(index) {
    if (!this.displayHeader) {
      return true;
    } else {
      if (index < (this.displayService.getCurrentSlide()-1)) {
        return false;
      } else {
        return true;
      }
    }
  }

}
