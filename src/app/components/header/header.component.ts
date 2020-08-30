import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  open = false;
  @Input() invert: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.open = !this.open;
  }

}
