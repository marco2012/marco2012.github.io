import {Component, OnInit} from '@angular/core';
import {ProgrammingLanguage, Project} from "../../models/project.model";
import {onlyUnique, PortfolioService} from "../../services/portfolio.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];
  languages: string[];

  searchText = '';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getProjects().subscribe(data => {
      this.projects = data
      this.languages = data.map(p=>p.language).filter(onlyUnique);
    });
  }

  onSearchTextChanged(text: string) {
    this.searchText = text;
  }

}
