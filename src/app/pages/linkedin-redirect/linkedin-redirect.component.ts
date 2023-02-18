import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-linkedin-redirect",
  templateUrl: "./linkedin-redirect.component.html",
  styleUrls: ["./linkedin-redirect.component.scss"],
})
export class LinkedinRedirectComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.location.href = 'https://www.linkedin.com/in/marco-lupia/'
  }
}
