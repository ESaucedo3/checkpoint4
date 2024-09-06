import {Pop} from '../utils/Pop.js';

export class WeathersController {
  constructor() {
    console.log('Weathers Controller Active');
  }

  async getWeather() {
    try {
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }
}
