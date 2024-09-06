import {AuthController} from './controllers/AuthController.js';
import {PhotoController} from './controllers/PhotoController.js';
import {QuotesController} from './controllers/QuotesController.js';
import {TodosController} from './controllers/TodosController.js';
import {WeathersController} from './controllers/WeathersController.js';
import {router} from './router-config.js';
const USE_ROUTER = false;

class App {
  AuthController = new AuthController();
  TodosController = new TodosController();
  WeathersController = new WeathersController();
  PhotoController = new PhotoController();
  QuotesController = new QuotesController();

  constructor() {
    if (USE_ROUTER) {
      this.router = router;
      this.router.init(this);
    }
  }
}

const app = new App();
// @ts-ignore
window.app = app;
