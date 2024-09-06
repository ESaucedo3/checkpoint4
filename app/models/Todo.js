export class Todo {
  constructor(data) {
    this.id = data.id;
    this.completed = data.completed;
    this.creatorId = data.creatorId;
    this.description = data.description;
  }

  get TodosTemplate() {
    return ` <div class="d-flex align-items-center mt-3">
                <input onchange="app.TodosController.updateTodo('${this.id}')" class="selectable" type="checkbox" ${this.completed ? 'checked' : ''}>
                <label class="m-0 ms-1">${this.DetermineStrike}</label>
                <i onclick="app.TodosController.deleteTodo('${this.id}')" class="fa-sharp fa-solid fa-trash fa-lg ms-auto selectable" style="color: #6c0702;"></i>
              </div>`;
  }

  get DetermineStrike() {
    if (this.completed) {
      return `<span style="text-decoration: line-through;">${this.description}<span>`;
    } else {
      return `${this.description}`;
    }
  }
}
