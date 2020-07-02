import {Component, OnInit} from '@angular/core';
import {ProgrammingLanguage, Project} from "../../models/project.model";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: Project[] = [
    new Project("instabot", "Download great wallpapers for your iPhone.", "http://www.google.com", ProgrammingLanguage.PYTHON, "oggi", "img"),
    new Project("cobspread", "Best anonymous place to find good secrets. Various categories are available. Secrets can be searched by keyword and can be filtered by male/female.", "http://www.apple.com", ProgrammingLanguage.JAVASCRIPT, "oggi", "img"),
    new Project("Led convert", "Calculate the equivalence, in terms of perceived brightness, between various technologies and LED devices. Moreover it shows how much money can be saved using newer technologies The formulas used were taken from the ", "http://www.apple.com", ProgrammingLanguage.JAVA, "oggi", "img"),
    new Project("cobspread", "Best anonymous place to find good secrets. Various categories are available. Secrets can be searched by keyword and can be filtered by male/female.", "http://www.apple.com", ProgrammingLanguage.JAVASCRIPT, "oggi", "img"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
