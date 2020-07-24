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

  constructor() {
  }

  ngOnInit() {
  }

  divClick() {
    if (this.link) {
      window.open(this.link, "_blank");
    }
  }
}
