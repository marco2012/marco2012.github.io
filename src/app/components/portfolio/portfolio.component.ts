import {Component, OnInit} from '@angular/core';
import {ProgrammingLanguage, Project} from "../../models/project.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Project[];
  searchText = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getProjects().subscribe(data => {
      this.projects = data
    });
  }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<{projects: Project[]}>("/assets/projects.json").pipe(
      map(res => res.projects)
    );
  }

  onSearchTextChanged(text: string) {
    this.searchText = text;
  }

}
