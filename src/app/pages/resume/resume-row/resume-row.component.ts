import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume-row',
  templateUrl: './resume-row.component.html',
  styleUrls: ['./resume-row.component.scss']
})
export class ResumeRowComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle?: string;
  @Input() year?: string;
  @Input() description?: string;
  @Input() date?: string;
  @Input() link?: string;

  constructor() { }

  ngOnInit() {
  }

}
