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
  categories: string[];

  searchText = '';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getProjects().subscribe(data => {
      this.projects = data.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));
      this.categories = data.map(p=>p.category).filter(onlyUnique).sort();
    });
  }

  onSearchTextChanged(text: string) {
    this.searchText = text;
  }

}
