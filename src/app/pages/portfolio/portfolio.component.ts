import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Project} from "../../models/project.model";
import {onlyUnique, PortfolioService} from "../../services/portfolio.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  projects: Project[] = [];
  categoriesCount = {};
  languagesCount = {};
  searchText: string = "";
  category: string = "";
  query: string = "";

  constructor(private portfolioService: PortfolioService,
              private router: Router,
              private route: ActivatedRoute,
              private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.onSearchTextChanged("");
    this.countObjects('category', this.categoriesCount)
    this.countObjects('language', this.languagesCount)
    this.onQueryParamChange()
  }

  ngAfterViewInit() {
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = '';
  }

  countObjects(object: string, saveDict) {
    const categories = this.projects.map(p => p[object]);
    categories.reduce((countMap, word) => {
      countMap[word] = ++countMap[word] || 1;
      return countMap;
    }, saveDict);
    saveDict['All'] = this.projects.length;
  }

  onSearchTextChanged(searchText: string) {
    this.searchText = searchText;
    this.projects = this.portfolioService.filterProjects(this.searchText);
  }

  onQueryParamChange() {
    this.route.queryParams.subscribe((params: Params) => {
      this.query = "";
      // console.log(Object.keys(params))
      if (params.category) {
        if (params.category === "All") this.removeQueryParam("category");
        this.category = params.category || "";
        this.projects = this.portfolioService.filterAttribute(params.category, 'category');
      }
      if (params.query) {
        this.query = params.query || "";
        this.projects = this.portfolioService.filterAttribute(this.query, 'title');
      }
      if (params.language) {
        if (params.language === "All") this.removeQueryParam("language");
        this.projects = this.portfolioService.filterAttribute(params.language, 'language');
      }
    })
  }

  removeQueryParam(param: string) {
    let queryParams = {};
    queryParams[param] = null;
    this.router.navigate([], {
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    })
  }

}
