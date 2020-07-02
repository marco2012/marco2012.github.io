import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../models/project.model";

@Component({
  selector: 'app-card-big',
  templateUrl: './card-big.component.html',
  styleUrls: ['./card-big.component.scss']
})
export class CardBigComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
