import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchText = '';

  @Output()
  searchTextEvent = new EventEmitter<string>();

  constructor() { }

  onSearchChanged(event) {
    this.searchTextEvent.emit(this.searchText);
  }

}
