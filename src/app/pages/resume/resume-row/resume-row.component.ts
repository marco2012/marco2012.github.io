import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume-row',
  templateUrl: './resume-row.component.html',
  styleUrls: ['./resume-row.component.scss']
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

  constructor() {
  }

  ngOnInit() {
  }

  divClick() {
    if (this.link) {
      window.open(this.link, "_blank");
    }
  }

  private monthDiff(d1, d2) {
    var months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  private getYears(d1, d2) {
    let y = (d2.getFullYear() - d1.getFullYear())
    return y;
  }

  calculatePeriod() {
    if (this.year == null) return;

    let ss = this.year.split(' - ')[0]
    let ee = this.year.split(' - ')[1]
    let d1 = new Date(ss)
    let d2 = ee === "present" ? new Date() : new Date(ee)

    let m = this.monthDiff(d1, d2);
    if (m < 12) {
      return ` (${m + 1} ${m == 0 ? 'month' : 'months'})`;
    } else {
      let y = this.getYears(d1, d2);
      return ` (${y} ${y == 1 ? 'year' : 'years'})`;
    }
        
  }

}
