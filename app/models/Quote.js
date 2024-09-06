export class Quote {
  constructor(data) {
    this.content = data.content;
    this.author = data.author;
  }

  get quoteTemplate() {
    return `
    <p class="text-center">${this.author}</p>
    <p class="text-center text-light">${this.content}</p>
    `;
  }
}
