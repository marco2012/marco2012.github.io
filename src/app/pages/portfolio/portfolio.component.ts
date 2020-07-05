import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {Project} from "../../models/project.model";
import {onlyUnique, PortfolioService} from "../../services/portfolio.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  projects: Project[] = [];
  categoriesCount = {};

  searchText = '';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
      // this.subscription = this.portfolioService.projectsChanged
      // .subscribe(
      //   (projects: Project[]) => {
      //     this.projects = projects;
      //   }
      // );
    this.projects = this.portfolioService.getProjects();
    // this.categories = this.projects.map(p=>p.category).filter(onlyUnique).sort();
    this.countCategories()
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  onSearchTextChanged(text: string) {
    this.searchText = text;
  }

  countCategories() {
    const categories = this.projects.map(p=>p.category);
    categories.reduce((countMap, word) => {
      countMap[word] = ++countMap[word] || 1;
      return countMap;
    }, this.categoriesCount);
  }

}
