export class Project {
  id: number;
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
      case "Dart":
        selector = "flutter"
        break
      case "HTML/CSS/JavaScript":
        selector = "javascript"
        break
      case "Web":
        selector = "html5"
        break
      case "Rails":
        selector = "rubyonrails"
        break
      case "AppleScript":
        selector = "apple"
        break
      case "Objective C":
        selector = "apple"
        break
      default:
        selector = language.toLowerCase();
        break;
    }
    return `https://unpkg.com/simple-icons@v3/icons/${selector}.svg`;
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


