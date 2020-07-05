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
  categories: string[];

  searchText = '';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
      this.subscription = this.portfolioService.projectsChanged
      .subscribe(
        (projects: Project[]) => {
          this.projects = projects;
        }
      );
    this.projects = this.portfolioService.getProjects();
    this.categories = this.projects.map(p=>p.category).filter(onlyUnique).sort();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSearchTextChanged(text: string) {
    this.searchText = text;
  }

}
