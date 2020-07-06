import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Project} from "../models/project.model";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  projects: Project[] = [];
  projectsChanged = new Subject<Project[]>();

  constructor(private httpClient: HttpClient) { }

  getProjects(){
    return this.projects;
  }

  sortedProjects(projects: Project[]){
    return projects.sort((a, b) => parseInt(b.date) - parseInt(a.date))
  }

  setProjects(projects: Project[]) {
    this.projects = this.sortedProjects(projects);
    this.projectsChanged.next(this.projects.slice());
  }

  fetchProjects(): Observable<Project[]> {
    return this.httpClient
      .get<{projects: Project[]}>("/assets/projects.json")
      .pipe(
        map(res => res.projects),
        tap(res => this.setProjects(res))
    );
  }

  filterProjects(searchText: string) {
    return this.projects.filter(proj => {
      return (JSON.stringify(proj).toLocaleLowerCase().includes(searchText));
    });
  }

  filterCategory(category:string){
    if (typeof category === "undefined" || category==="" || category.toLowerCase() === "all") {
      return this.projects;
    }
     return this.sortedProjects(this.projects.filter(proj => proj.category.toLowerCase() === category.toLowerCase()))
  }

}

export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
