import { Component, OnInit } from '@angular/core';
import { SharedTodoService } from '../shared-todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = this.sharedTodos.getTodos();

  constructor(private sharedTodos: SharedTodoService) { }
  ngOnInit() {
  }

  total() {
    return this.sharedTodos.getTodos().length;
  }
  completed() {
    return this.todos.filter(item => item.done).length;
  }
  change(todo) {
    this.sharedTodos.changeState(todo);
  }
  delete(todo) {
    this.sharedTodos.removeTodo(todo);
  }
}
