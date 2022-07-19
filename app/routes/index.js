import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// import fetch from 'fetch';

export default class IndexRoute extends Route {
  @service store;
  async model() {
    return this.store.findAll('daily-forecast');
  }
}
