import {AppState} from '../AppState.js';
import {Quote} from '../models/Quote.js';
import {api} from './AxiosService.js';

class QuotesService {
  async getQuote() {
    const response = await api.get('api/quotes');
    const newQuote = new Quote(response.data);
    AppState.quote = newQuote;
  }
}

export const quotesService = new QuotesService();
