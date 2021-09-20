import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cvopener',
  templateUrl: './cvopener.component.html',
  styleUrls: ['./cvopener.component.scss']
})
export class CVOpenerComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
    window.location.href = "../assets/documents/marco_lupia_resume.pdf";
  }

}
