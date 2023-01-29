import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent implements OnInit {
  @Input() list: any;
  @Input() deleteToDos: any;
  @Input() pickForUpdateToDo: any;
  @Input() toDoId: Number;

  constructor() {
    this.toDoId = 0;
  }

  ngOnInit(): void {
    console.log('list', this.list);
  }
}
