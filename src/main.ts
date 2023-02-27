import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';
import { SwiperComponent } from './components/swiper/swiper.component';
import { SwiperDirective } from './directives/swiper.directive';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, SwiperComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <app-swiper> </app-swiper>
  `,
})
export class App {
  name = 'Angular';
  constructor() {
    register();
  }
}

bootstrapApplication(App);
