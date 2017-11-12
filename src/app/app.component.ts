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

  constructor(private router: Router, private displayService: DisplayService) {
    displayService.source.onmessage = message => {
      let name;
      console.log(JSON.parse(message.data).move);
      if (JSON.parse(message.data).move === 'left') {
        name = displayService.prevSlide();
      } else if (JSON.parse(message.data).move === 'right') {
        name = displayService.nextSlide();
      }
      if (name) {
        this.router.navigate([name]);
      }
    };
  }
  @HostListener('window:keydown', ['$event'])  
  handleKeyboardEvent(event: KeyboardEvent) {
    let name;
    if (event.keyCode === 37 || event.keyCode === 38) {
      name = this.displayService.prevSlide();
    } else if (event.keyCode === 39 || event.keyCode === 40) {
      name = this.displayService.nextSlide();
    }
    if (name) {
      this.router.navigate([name]);
    }
  }
}
