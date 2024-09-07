export class Quote {
  constructor(data) {
    this.content = data.content;
    this.author = data.author;
  }

  get quoteTemplate() {
    return `
    <h3 class="text-center text-light actual-author">${this.author}</h3>
    <h2 class="text-center text-light">${this.content}</h2>
    `;
  }
}
