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

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}

export enum ProgrammingLanguage {
  PYTHON = "Python",
  JAVA = "Java",
  JAVASCRIPT = "JavaScript",
  SWIFT = "Swift",
  SQL = "SQL",
}
