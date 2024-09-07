export class Weather {
  constructor(data) {
    this.name = data.name;
    this.main = data.main;
    this.weather = data.weather;
  }

  get weatherTemplate() {
    return `<p class="m-0 text-center">26*c<br />${this.name}</p>
            <i class="align-self-center ms-3 fs-3">☀️</i>`;
  }
}
