import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {

  @Input() invert?: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}
