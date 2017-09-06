import { Component, OnInit } from '@angular/core';
import { SharedTodoService } from '../shared-todo.service';

import { Todo } from '../todo';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private sharedTodos: SharedTodoService) { }

  ngOnInit() {
  }

  add(event, title: string) {
    if (title.trim()) {
      this.sharedTodos.addTodo(title);
    }
  }

  change(event, todo: Todo) {
    console.log(todo);
    this.sharedTodos.changeState(todo);
  }

}
