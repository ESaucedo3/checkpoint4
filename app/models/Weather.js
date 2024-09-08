export class Weather {
  constructor(data) {
    this.name = data.name;
    this.main = data.main;
    this.weather = data.weather;
    this.determineTemp = true;
  }

  get weatherTemplate() {
    return `<p class="m-0 text-center">${this.determineTemp ? `${this.getFahrenheit.toFixed(2)}°F` : `${this.getCelsius.toFixed(2)}°C`}<br />${this.name}</p>
            <img class="align-self-center ms-3 fs-3" src="${this.weather.icon}" alt="${this.weather.main}">
            `;
  }

  get getCelsius() {
    return this.main.temp - 273.15;
  }

  get getFahrenheit() {
    return ((this.main.temp - 273.15) * 9) / 5 + 32;
  }
}
