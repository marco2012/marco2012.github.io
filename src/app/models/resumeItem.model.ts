export class ResumeItem {
  title: string;
  subtitle?: string;
  date?: string;
  link?: string;

  constructor(title: string, subtitle?: string, date?: string, link?: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.date = date;
    this.link = link;
  }
}

