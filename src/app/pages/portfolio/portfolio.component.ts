import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Output} from '@angular/core';
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
        this.category = params.category || "";
        this.projects = this.portfolioService.filterCategory(this.category);
    })
  }

  trackByFn(index, item) {
    if (!item) return null;
    console.log( 'TrackBy:', item.id, 'at index', index );
    return( item.id );
  }

}
