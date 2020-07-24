import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {ResumeItem} from "../../models/resumeItem.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, AfterViewInit {

  resumeItems: ResumeItem[] = [
    new ResumeItem(
      "REST API",
      "HackerRank",
      "July 2020",
      "https://www.hackerrank.com/certificates/579ba2349a33",
      "579BA2349A33",
      "icon-hackerrank.svg"),
    new ResumeItem(
      "Fondamenti di Marketing Digitale",
      "Google Digital Technologies",
      "Jan 2020",
      "https://learndigital.withgoogle.com/digitaltraining/validate-certificate-code",
      "XG7 Q85 4C7",
      "icon-google.svg"),
    new ResumeItem(
      "EF Standard English Test – Level C2",
      "EF Standard English Test",
      "Jun 2019",
      "https://www.efset.org/cert/hrVnQr",
      "hrVnQr",
      "icon-language.svg"),
    new ResumeItem(
      "Cambridge English: Advanced (CAE) – CEFR level C1",
      "Cambridge School of English",
      "Jun 2015",
      "",
      "",
      "icon-language.svg"),
    new ResumeItem(
      "Duolingo English Test",
      "Duolingo",
      "Jul 2014",
      "https://certs.duolingo.com/c3gdg6qp",
      "c3gdg6qp",
      "icon-language.svg"),
    new ResumeItem(
      "European Computer Driving Licence",
      "AICA - Associazione Italiana per l'Informatica ed il Calcolo Automatico",
      "Jun 2013",
      "",
      "",
      "icon-computer.svg"),
    new ResumeItem(
      "DELF - A2",
      "Conseil International d'Études Francophones (CIEF)",
      "Jul 2011",
      "",
      "",
      "icon-language.svg"),
  ];

  constructor(private elementRef: ElementRef,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = '';
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment) {
        setTimeout(() => {
          document.querySelector('#' + fragment).scrollIntoView({behavior: 'smooth'});
        }, 100)
      }
    })
  }

}
