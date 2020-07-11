export class Project {
  id: number;
  title: string;
  description: string;
  link: string;
  language: string;
  date: string;
  image: string;
  skills: string;
  category: string;

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

