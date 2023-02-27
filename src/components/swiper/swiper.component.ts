import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { SwiperOptions } from 'swiper';
import { SwiperDirective } from '../../directives/swiper.directive';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css'],
  imports: [CommonModule, SwiperDirective],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperEl') private swiperElement: ElementRef;

  public slides$: Observable<any> = of([
    { time: new Date() },
    { time: new Date() },
    { time: new Date() },
    { time: new Date() },
  ]);

  public config: SwiperOptions = {
    loop: true,
    navigation: true,
    pagination: true,
    on: {
      afterInit: () => {
        console.log('afterInit');
      },
      activeIndexChange: function () {
        console.log('activeIndexChange');
      },
    },
  };

  constructor() {}

  ngOnInit() {
    console.log('SwiperComponent OnInit');
  }

  ngAfterViewInit() {
    console.log('SwiperComponent ngAfterViewInit');
    this.swiperElement.nativeElement.swiper.on('slideChange', () =>
      console.log('slideChange event')
    );
  }
}
