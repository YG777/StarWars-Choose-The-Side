import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() characters; //get all chars data from TAB component
  @Output() SideAssigned = new EventEmitter<{name: string, side: string}>();
  constructor() { }

  ngOnInit() {
  }
  onSideAssigned(charInfo){ //call TAB's method to get the side of the list
    this.SideAssigned.emit(charInfo);
  }
}
