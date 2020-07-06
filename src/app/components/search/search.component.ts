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
    if ((event.type === "input" && event.target.value === "") || (event.type === "change")) {
      this.searchTextEvent.emit(this.searchText);
    }
  }

}
