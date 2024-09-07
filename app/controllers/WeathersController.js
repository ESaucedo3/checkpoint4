import {AppState} from '../AppState.js';
import {weathersService} from '../services/WeathersService.js';
import {Pop} from '../utils/Pop.js';
import {setHTML} from '../utils/Writer.js';

export class WeathersController {
  constructor() {
    console.log('Weathers Controller Active');
    this.getWeather();
    AppState.on('weather', this.drawWeather);
  }

  async getWeather() {
    try {
      await weathersService.getWeather();
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  drawWeather() {
    const weather = AppState.weather;
    setHTML('weather', weather.weatherTemplate);
  }
}
