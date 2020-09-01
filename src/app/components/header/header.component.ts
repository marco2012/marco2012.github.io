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
    if (this.invert) {
      document.getElementById("menu_svg").setAttribute("fill", "white");
    }
  }

  onClick() {
    this.open = !this.open;
  }

}
