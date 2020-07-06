import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.elementRef.nativeElement.ownerDocument.body.style.background = 'linear-gradient(45deg, rgba(205,205,205,1) 0%, rgba(255,255,255,1) 100%);';
    // this.elementRef.nativeElement.ownerDocument.body.style.display = 'block';
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = '100% 100%';
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundRepeat = 'no-repeat';
  }

}
