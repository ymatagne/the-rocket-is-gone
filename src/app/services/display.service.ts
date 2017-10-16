import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';

@Injectable()
export class DisplayService {
  private displayHeader = new Subject<boolean>();
  private displayFooter = new Subject<boolean>();
  private completion = new Subject<number>();

  public nbrSlide: number;
  private curentSlide: number;

  constructor() {
    this.nbrSlide = environment.slides.length;
    this.curentSlide = 0
  }

  setShowHeader(value) {
    this.displayHeader.next(value);
  }

  showHeader() {
    return this.displayHeader;
  }
  setShowFooter(value) {
    this.displayFooter.next(value);
  }

  showFooter() {
    return this.displayFooter;
  }

  getCompletion() {
    return this.completion;
  }

  setShowValues(slide) {
    this.displayFooter.next(slide.showFooter);
    this.displayHeader.next(slide.showHeader);
  }

  getCurrentSlide() {
    return this.curentSlide;
  }
  
  nextSlide() {
    let nextSlide = this.curentSlide + 1;
    if (nextSlide < this.nbrSlide) {
      this.curentSlide = nextSlide;
      this.setShowValues(environment.slides[this.curentSlide]);
      this.calculateCompletion();
    }
    return environment.slides[this.curentSlide].name;
  }

  prevSlide() {
    let prevSlide = this.curentSlide - 1;
    if (prevSlide >= 0) {
      this.curentSlide = prevSlide;
      this.setShowValues(environment.slides[this.curentSlide]);
      this.calculateCompletion();
    }
    return environment.slides[this.curentSlide].name;
  }

  calculateCompletion() {
    this.completion.next((this.curentSlide * 90) / (this.nbrSlide - 1));
  }

}
