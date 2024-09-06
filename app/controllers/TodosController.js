import {AppState} from '../AppState.js';
import {todosService} from '../services/TodosService.js';
import {getFormData} from '../utils/FormHandler.js';
import {Pop} from '../utils/Pop.js';
import {setHTML} from '../utils/Writer.js';

export class TodosController {
  constructor() {
    console.log('Todos Controller Active');
    AppState.on('user', this.getTodos);
    AppState.on('todos', this.drawTodos);
  }

  // NOTE CRUD | [Create, Read, Update, Delete]

  // POST Todo
  async createTodo() {
    try {
      event.preventDefault();
      const form = event.target;
      const todoData = getFormData(form);
      // @ts-ignore
      form.reset();
      await todosService.createTodo(todoData);
      determineCount();
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  // GET Todos
  async getTodos() {
    try {
      await todosService.getTodos();
      const userTodos = document.getElementById('user-todos');
      determineCount();
      userTodos.classList.remove('d-none');
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  // PUT Todo
  async updateTodo(todoId) {
    try {
      await todosService.updateTodo(todoId);
      determineCount();
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  // DELETE Todo
  async deleteTodo(todoId) {
    try {
      const deletetion = await Pop.confirm('Are you sure that you want to delete this note?');
      if (!deletetion) return;
      await todosService.deleteTodo(todoId);
      determineCount();
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  drawTodos() {
    const todos = AppState.todos;
    let todosContent = '';
    todos.forEach((todo) => (todosContent += todo.TodosTemplate));
    setHTML('todos', todosContent);
  }
}

function determineCount() {
  const todos = AppState.todos;
  let todosLeft = 0;
  todos.forEach((todo) => {
    if (!todo.completed) {
      todosLeft++;
    }
  });
  const todoCount = document.getElementById('todo-count');
  todoCount.textContent = todosLeft.toString();
}
