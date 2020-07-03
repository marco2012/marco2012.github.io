import {Component, OnInit} from '@angular/core';
import {ProgrammingLanguage, Project} from "../../models/project.model";
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import projects from 'src/assets/projects.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: Project[];
  //   = [
  //   new Project("instabot", "Download great wallpapers for your iPhone.", "http://www.google.com", ProgrammingLanguage.PYTHON, "oggi", "img"),
  //   new Project("cobspread", "Best anonymous place to find good secrets. Various categories are available. Secrets can be searched by keyword and can be filtered by male/female.", "http://www.apple.com", ProgrammingLanguage.JAVASCRIPT, "oggi", "img"),
  //   new Project("Led convert", "Calculate the equivalence, in terms of perceived brightness, between various technologies and LED devices. Moreover it shows how much money can be saved using newer technologies The formulas used were taken from the ", "http://www.apple.com", ProgrammingLanguage.JAVA, "oggi", "img"),
  //   new Project("cobspread", "Best anonymous place to find good secrets. Various categories are available. Secrets can be searched by keyword and can be filtered by male/female.", "http://www.apple.com", ProgrammingLanguage.JAVASCRIPT, "oggi", "img"),
  // ]

  searchText = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getProjects()
  }

  getProjects(){
    // this.httpClient.get("assets/projects.json").subscribe(data =>{
    //   console.log(data);
    //   JSON.parse(data).map(data => Object.assign(new ProductVM(), data))
    //   this.projects = Object.assign(new Todo(), jsonData
    //   // this.projects = data;
    // })
    let jsonObj: any = JSON.parse(projects); // string to generic object first
    console.log(jsonObj)
    // let employee: Project = <Project>jsonObj;
  }

  onSearchTextChanged(text: string) {
    this.searchText = text;
  }

}
