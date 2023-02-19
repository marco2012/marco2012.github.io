import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.querySelector('body').classList.add('home');
  }

  ngOnDestroy() {
    document.querySelector('body').classList.remove('home');
  }

  clickLinkedin() {
    // @ts-ignore
    window.dataLayer.push({
      'event': 'click_linkedin',
      'detail': 'homepage button',
    });
    window.open('https://www.linkedin.com/in/marco-lupia/', '_blank').focus();
  }

}
