import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  open = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
  }

  onClick(){
    this.open = !this.open;
  }

}
