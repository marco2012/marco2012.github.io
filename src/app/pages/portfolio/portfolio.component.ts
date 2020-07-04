import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProgrammingLanguage, Project} from "../../models/project.model";
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
    // this.portfolioService.fetchProjectsOld().subscribe(data => {
    //   this.projects = data.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));
    //   this.categories = data.map(p=>p.category).filter(onlyUnique).sort();
    // });

    // if (this.projects.length === 0) {
    //   console.log("fetching")
    //   this.portfolioService.fetchProjects().subscribe();
    // }
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
