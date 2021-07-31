export class ResumeItem {
  title: string;
  subtitle?: string;
  date?: string;
  link?: string;
  id?: string;
  icon?: string;
  hidden?: boolean;

  constructor(title: string, subtitle?: string, date?: string, link?: string, id?: string, icon?: string, hidden?: boolean) {
    this.title = title;
    this.subtitle = subtitle;
    this.date = date;
    this.link = link;
    this.id = id;
    this.icon = icon;
    this.hidden = hidden;
  }
}

export class SkillItem {
  title: string;
  icon: string;

  constructor(title: string, icon: string) {
    this.title = title;
    this.icon = icon;
  }
}

