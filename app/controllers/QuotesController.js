import {AppState} from '../AppState.js';
import {quotesService} from '../services/QuotesService.js';
import {Pop} from '../utils/Pop.js';
import {setHTML} from '../utils/Writer.js';

export class QuotesController {
  constructor() {
    console.log('Quotes Controller loaded');
    this.getQuote();
    AppState.on('quote', this.drawQuote);
  }

  async getQuote() {
    try {
      await quotesService.getQuote();
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  drawQuote() {
    const quote = AppState.quote;
    setHTML('quote', quote.quoteTemplate);
  }
}
