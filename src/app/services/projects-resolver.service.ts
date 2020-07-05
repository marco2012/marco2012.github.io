import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Project} from "../models/project.model";
import {PortfolioService} from "./portfolio.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolverService implements Resolve<Project[]> {

  constructor(private portfolioService: PortfolioService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project[]> | Promise<Project[]> | Project[] {
    const projects = this.portfolioService.getProjects();
    if (projects.length === 0) {
      return this.portfolioService.fetchProjects();
    } else {
      return projects;
    }
  }
}
