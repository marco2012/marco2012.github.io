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
    return this.projects.slice().sort((a, b) => parseInt(b.date) - parseInt(a.date));
  }

  setProjects(projects: Project[]) {
    this.projects = projects;
    this.projectsChanged.next(this.projects.slice());
  }

  fetchProjects(): Observable<Project[]> {
    console.log("fetching projects")
    return this.httpClient
      .get<{projects: Project[]}>("/assets/projects.json")
      .pipe(
        map(res => res.projects),
        tap(res => this.setProjects(res))
    );
  }

  // setProjectss() {
  //   this.fetchProjects().subscribe(data => {
  //     this.projects = data.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));
  //   });
  // }

}

export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
