import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificate-row',
  templateUrl: './certificate-row.component.html',
  styleUrls: ['./certificate-row.component.scss']
})
export class CertificateRowComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  subtitle: string;

  @Input()
  date: string;

  @Input()
  link?: string = "";

  constructor() { }

  ngOnInit() {
  }

}
