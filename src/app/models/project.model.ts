export class Project {
  title: string;
  description: string;
  link: string;
  language: ProgrammingLanguage;
  date: string;
  image: string;

  constructor(title: string, description: string, link: string, language: ProgrammingLanguage, date: string, image: string) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.language = language;
    this.date = date;
    this.image = image;
  }

  static getClassIcon(language: ProgrammingLanguage) {
    let selector = '';
    switch (language) {
      case ProgrammingLanguage.CPLUSPLUS:
        selector = 'cplusplus';
        break;
      case ProgrammingLanguage.SQL:
        selector = 'mysql';
        break;
      case ProgrammingLanguage.ASSEMBLY:
        selector = 'devicon';
        break;
      case ProgrammingLanguage.APPLESCRIPT:
        selector = 'apple';
        break;
      default:
        selector = language.toLowerCase();
        break;
    }
    return `devicon-${selector}-plain`;
  }

  static getImagePath(image: string){

  }

}

export enum ProgrammingLanguage {
  PYTHON = "Python",
  JAVA = "Java",
  JAVASCRIPT = "JavaScript",
  SWIFT = "Swift",
  SQL = "SQL",
  CPLUSPLUS = "C++",
  ASSEMBLY = "Assembly",
  APPLESCRIPT = "AppleScript",
}


