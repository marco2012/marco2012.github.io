export class Project {
  title: string;
  description: string;
  link: string;
  language: ProgrammingLanguage;
  date: string;
  image: string;
  skills: string;
  category: string;

  // constructor(title: string, description: string, link: string, language: ProgrammingLanguage, date: string, image: string, skills: string, category: string) {
  //   this.title = title;
  //   this.description = description;
  //   this.link = link;
  //   this.language = language;
  //   this.date = date;
  //   this.image = image;
  //   this.skills = skills;
  //   this.category = category;
  // }

  static getClassIcon(language: string) {
    let selector = '';
    switch (language) {
      case "C++":
        selector = 'cplusplus';
        break;
      case "SQL":
        selector = 'mysql';
        break;
      case "Assembly":
        selector = 'devicon';
        break;
      case "AppleScript":
        selector = 'apple';
        break;
      case "Dart":
        selector = 'flutter';
        break;
      default:
        selector = language.toLowerCase();
        break;
    }
    return `devicon-${selector}-plain`;
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


