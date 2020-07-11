import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {ResumeItem} from "../../models/resumeItem.model";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, AfterViewInit {

  resumeItems: ResumeItem[] = [
    new ResumeItem("Fondamenti di Marketing Digitale", "Google Digital Technologies", "Jan 2020"),
    new ResumeItem("EF Standard English Test – Level C2", "EF Standard English Test", "Jun 2019", "https://www.efset.org/cert/hrVnQr"),
    new ResumeItem("Cambridge English: Advanced (CAE) – CEFR level C1","Cambridge School of English","Jun 2015"),
    new ResumeItem("European Computer Driving Licence","AICA - Associazione Italiana per l'Informatica ed il Calcolo Automatico","Jun 2013"),
    new ResumeItem("DELF - A2","Conseil International d'Études Francophones (CIEF)","Jul 2011"),
  ];

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = '';
  }

}
