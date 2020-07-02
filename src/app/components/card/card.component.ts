import {Component, Input, OnInit} from '@angular/core';
import {getClassIcon, Project} from "../../models/project.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() project: Project;
  classIcon: string;

  constructor() { }

  ngOnInit() {
    this.classIcon = getClassIcon(this.project.language);
  }

}
