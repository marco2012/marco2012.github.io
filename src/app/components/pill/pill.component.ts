import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent implements OnInit {

  @Input()
  categoriesCount = {};

  categoryType: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      typeof params.category === "undefined" ? this.categoryType = "" : this.categoryType = params.category
    })
  }

}
