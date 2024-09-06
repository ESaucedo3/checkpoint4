import {AppState} from '../AppState.js';
import {photoService} from '../services/PhotoService.js';
import {Pop} from '../utils/Pop.js';
import {setHTML} from '../utils/Writer.js';

export class PhotoController {
  constructor() {
    console.log('Photos Controller Active');
    this.getPhoto();
    AppState.on('photo', this.drawPhoto);
  }

  async getPhoto() {
    try {
      await photoService.getPhoto();
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  drawPhoto() {
    const photo = AppState.photo;
    document.body.style.backgroundImage = `url(${photo.largeImgUrl})`;
    setHTML('img-author', photo.photoTaken);
  }
}
