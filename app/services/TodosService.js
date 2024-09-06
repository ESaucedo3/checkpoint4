import {AppState} from '../AppState.js';
import {Todo} from '../models/Todo.js';
import {api} from './AxiosService.js';

class TodosService {
  // NOTE CRUD | [Create, Read, Update, Delete]

  // POST Todo
  async getTodos() {
    const response = await api.get('api/todos');
    const todos = response.data.map((todo) => new Todo(todo));
    AppState.todos = todos;
  }

  // GET Todos
  async createTodo(todoData) {
    const response = await api.post('api/todos', todoData);
    const newTodo = new Todo(response.data);
    AppState.todos.push(newTodo);
  }

  // PUT Todo
  async updateTodo(todoId) {
    const todos = AppState.todos;
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    const todo = todos[todoIndex];

    const todoData = {completed: !todo.completed};
    const response = await api.put(`api/todos/${todoId}`, todoData);
    console.log(response.data);

    const updatedTodo = new Todo(response.data);
    todos.splice(todoIndex, 1, updatedTodo);
  }

  // DELETE Todo
  async deleteTodo(todoId) {
    const response = await api.delete(`api/todos/${todoId}`);
    console.log(response.data);
    const todoIndex = AppState.todos.findIndex((todo) => todo.id === todoId);
    AppState.todos.splice(todoIndex, 1);
  }
}

export const todosService = new TodosService();
