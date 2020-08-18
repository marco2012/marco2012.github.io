import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() categoriesCount = {};
  @Input() languagesCount = {};
  selectedCategory = "Category";
  selectedLanguage = "Language";

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.onQueryParamChange()
    console.log(this.selectedLanguage)
  }

  onChange(e) {
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

  onQueryParamChange() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params.category) {
        this.selectedCategory = params.category || "";
      } else {
        this.selectedCategory = "Category";
      }
      if (params.language) {
        this.selectedLanguage = params.language || "";
      } else {
        this.selectedLanguage = "Language";
      }
    })
  }

}
