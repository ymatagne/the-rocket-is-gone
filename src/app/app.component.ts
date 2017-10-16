import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { DisplayService } from './services/display.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private displayService: DisplayService) { }
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let name;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      name = this.displayService.prevSlide();
    } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      name = this.displayService.nextSlide();
    }
    if (name) {
      this.router.navigate([name]);
    }
  }
}
