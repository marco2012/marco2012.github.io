import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../models/project.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<{projects: Project[]}>("/assets/projects.json").pipe(
      map(res => res.projects)
    );
  }

}

export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
