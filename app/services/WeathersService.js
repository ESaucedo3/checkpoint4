import {AppState} from '../AppState.js';
import {Weather} from '../models/Weather.js';
import {api} from './AxiosService.js';

class WeathersService {
  async getWeather() {
    const response = await api.get('api/weather');
    const newWeather = new Weather(response.data);
    AppState.weather = newWeather;
  }
}

export const weathersService = new WeathersService();
