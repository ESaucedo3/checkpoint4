import {AppState} from '../AppState.js';
import {Photo} from '../models/Photo.js';
import {api} from './AxiosService.js';

class PhotoService {
  async getPhoto() {
    const response = await api.get('api/images/?category=snow');
    const newPhoto = new Photo(response.data);
    AppState.photo = newPhoto;
  }
}

export const photoService = new PhotoService();
