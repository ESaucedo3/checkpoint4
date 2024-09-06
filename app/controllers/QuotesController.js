import {quotesService} from '../services/QuotesService.js';
import {Pop} from '../utils/Pop.js';

export class QuotesController {
  constructor() {
    console.log('Quotes Controller loaded');
  }

  async getQuote() {
    try {
      await quotesService.getQuote();
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }
}
