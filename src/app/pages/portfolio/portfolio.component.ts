import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Project} from "../../models/project.model";
import {onlyUnique, PortfolioService} from "../../services/portfolio.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  projects: Project[] = [];
  categoriesCount = {};
  searchText: string = "";
  category: string = "";
  query: string = "";

  constructor(private portfolioService: PortfolioService,
              private route: ActivatedRoute,
              private elementRef: ElementRef) { }

  ngOnInit() {
    this.onSearchTextChanged("");
    this.countCategories()
    this.onQueryParamChange()
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = '';
  }

  countCategories() {
    const categories = this.projects.map(p=>p.category);
    categories.reduce((countMap, word) => {
      countMap[word] = ++countMap[word] || 1;
      return countMap;
    }, this.categoriesCount);
    this.categoriesCount['All'] = this.projects.length;
  }

  onSearchTextChanged(searchText: string) {
    this.searchText = searchText;
    this.projects = this.portfolioService.filterProjects(this.searchText);
  }

  onQueryParamChange() {
    this.route.queryParams.subscribe((params: Params) => {
      this.query = "";
      if (params.category) {
        this.category = params.category || "";
        this.projects = this.portfolioService.filterCategory(this.category);
      }
      if (params.query) {
        this.query = params.query || "";
        this.projects = this.portfolioService.filterTitle(this.query);
      }
    })
  }

}
