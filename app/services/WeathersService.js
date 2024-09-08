import {AppState} from '../AppState.js';
import {Weather} from '../models/Weather.js';
import {api} from './AxiosService.js';

class WeathersService {
  toggleWeather() {
    const weather = AppState.weather;
    weather.determineTemp = !weather.determineTemp;
  }
  async getWeather() {
    const response = await api.get('api/weather');
    const newWeather = new Weather(response.data);
    AppState.weather = newWeather;
    console.log(AppState.weather);
  }
}

export const weathersService = new WeathersService();
