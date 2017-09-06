import { Injectable } from '@angular/core';

@Injectable()
export class SharedTodoService {
  todos = [{
    title: 'Help Anand',
    done: false
  }, {
    title: 'Solve IPAS-6788',
    done: true
  }];
  constructor() { }

  getTodos() {
    return this.todos;
  }
  addTodo(todo) {
    this.todos.push({
      title: todo,
      done: false
    });
  }
  removeTodo(todo) {
    // this.todos = this.todos.filter(item => item.title !== todo.title);
    this.todos.splice(this.todos.findIndex(item => item.title === todo.title), 1);
  }
  changeState(todo) {
    this.todos.find(item => item.title === todo.title).done = !todo.done;
  }
}
