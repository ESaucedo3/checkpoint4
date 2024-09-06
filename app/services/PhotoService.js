import {AppState} from '../AppState.js';
import {Photo} from '../models/Photo.js';
import {api} from './AxiosService.js';

class PhotoService {
  async getPhoto() {
    const response = await api.get('api/images/?category=snow');
    console.log(response.data);
    const newPhoto = new Photo(response.data);
    AppState.photo = newPhoto;
    console.log(AppState.photo);
  }
}

export const photoService = new PhotoService();
