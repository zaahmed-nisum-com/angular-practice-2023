import { Component } from '@angular/core';
import { ToDos } from './model/to-dos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todo = '';
  toDoId: Number = 0;
  toDoList: ToDos[] = [];

  isUpdation: Boolean = false;

  onTextChange = (value: any) => {
    this.todo = value.target.value;
  };

  addToDos = () => {
    if (this.isUpdation) {
      const nonUpdatingItems: any = this.toDoList.filter(
        (item) => item.id !== this.toDoId
      );
      nonUpdatingItems.push({ id: this.toDoId, text: this.todo });
      this.toDoList = [...nonUpdatingItems];
    }
    if (!this.isUpdation) {
      this.toDoList = [
        ...this.toDoList,
        { id: Math.floor(Math.random() * 1000), text: this.todo },
      ];
    }
    this.isUpdation = false;
    this.toDoId = 0;
    this.todo = '';
  };

  pickForUpdateToDo = (selectedItem: ToDos) => {
    const itemToUpdate: any = this.toDoList.filter(
      (item) => item.id == selectedItem.id
    );
    if (itemToUpdate.length == 1) {
      this.toDoId = itemToUpdate[0].id;
      this.todo = itemToUpdate[0].text;
      this.isUpdation = true;
    }
  };

  deleteToDos = (id: Number) => {
    const itemToDelete = this.toDoList.filter((item) => item.id !== id);
    this.toDoList = [...itemToDelete];
  };
}
