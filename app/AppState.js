import {Photo} from './models/Photo.js';
import {Todo} from './models/Todo.js';
import {EventEmitter} from './utils/EventEmitter.js';
import {createObservableProxy} from './utils/ObservableProxy.js';

class ObservableAppState extends EventEmitter {
  user = null;
  /**@type {import('./models/Account.js').Account | null} */
  account = null;

  /**@type {Todo[]} */
  todos = [];

  /**@type {Photo} */
  photo = null;
}

export const AppState = createObservableProxy(new ObservableAppState());
