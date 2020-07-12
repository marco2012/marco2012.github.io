import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() categoriesCount = {};
  @Input() languagesCount = {};

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onChange(e){
    let param = {}
    switch (e.target.id) {
      case 'categorySelect':
        param['category'] = e.target.value;
        break;
      case 'languageSelect':
        param['language'] = e.target.value;
        break;
    }
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: param,
        queryParamsHandling: 'merge'
      });
  }

}
