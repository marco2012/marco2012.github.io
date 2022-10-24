import { Component, Input, OnInit } from "@angular/core";
import { intervalToDuration, formatDuration } from "date-fns";

@Component({
  selector: "app-resume-row",
  templateUrl: "./resume-row.component.html",
  styleUrls: ["./resume-row.component.scss"],
})
export class ResumeRowComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle?: string;
  @Input() subtitle2?: string;
  @Input() subtitle3?: string;
  @Input() year?: string;
  @Input() description?: string;
  @Input() small_description?: boolean;
  @Input() date?: string;
  @Input() link?: string;
  @Input() thesis?: string;
  @Input() thesis_link?: string;
  @Input() icon?: string;
  @Input() credential_id?: string;
  @Input() single_highlight?: boolean = false;
  @Input() expanded_description?: boolean = false;

  constructor() {}

  ngOnInit() {}

  divClick() {
    if (this.link) {
      window.open(this.link, "_blank");
    }
  }

  // private monthDiff(d1, d2) {
  //   var months = (d2.getFullYear() - d1.getFullYear()) * 12;
  //   months -= d1.getMonth();
  //   months += d2.getMonth();
  //   return months <= 0 ? 0 : months;
  // }

  // private getYears(d1, d2) {
  //   let y = d2.getFullYear() - d1.getFullYear();
  //   return y;
  // }

  private monthToNumber(m) {
    let month = m.split(" ")[0];
    let n = 0;
    switch (month) {
      case "Jan": {
        n = 1;
        break;
      }
      case "Feb": {
        n = 2;
        break;
      }
      case "Mar": {
        n = 3;
        break;
      }
      case "Apr": {
        n = 4;
        break;
      }
      case "May": {
        n = 5;
        break;
      }
      case "Jun": {
        n = 6;
        break;
      }
      case "Jul": {
        n = 7;
        break;
      }
      case "Aug": {
        n = 8;
        break;
      }
      case "Sep": {
        n = 9;
        break;
      }
      case "Oct": {
        n = 10;
        break;
      }
      case "Nov": {
        n = 11;
        break;
      }
      case "Dec": {
        n = 12;
        break;
      }
    }
    return n;
  }

  private dateFromStr(s) {
    let y = s.split(" ")[1];
    if (y == null) return new Date(s);
    let m = this.monthToNumber(s);
    return new Date(`${m}/1/${y}`);
  }

  calculatePeriod() {
    if (this.year == null) return;

    let ss = this.year.split(" - ")[0];
    let ee = this.year.split(" - ")[1].trim();

    let d1 = this.dateFromStr(ss);
    let d2 =
      ee === "present" || ee === "now" ? new Date() : this.dateFromStr(ee);

    //   let m = this.monthDiff(d1, d2);
    //   if (m != null && !isNaN(m) && m < 12) {
    //     return ` (${m + 1} ${m == 0 ? "month" : "months"})`;
    //   } else {
    //     let y = this.getYears(d1, d2);
    //     if (y != null && !isNaN(y)) {
    //       return ` (${y} ${y == 1 ? "year" : "years"})`;
    //     }
    //   }

    // https://stackoverflow.com/a/73010767
    let totalDuration = intervalToDuration({
      start: d1,
      end: d2,
    });

    let textDuration =
      "(" +
      formatDuration(totalDuration, {
        format: ["years", "months"],
        delimiter: ", ",
      }) +
      ")";
    return textDuration;
  }
}
