import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../models/project.model";
import * as AOS from 'aos';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  project: Project;

  classIcon: string;
  imagePath: string;
  date: Date;

  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 250
    });
    this.classIcon = Project.getClassIcon(this.project.language);
    this.imagePath = '/assets/images/'+this.project.image;
    this.date = new Date(+this.project.date * 1000)
  }

}
