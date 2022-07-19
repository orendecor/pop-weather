import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// import fetch from 'fetch';

export default class IndexRoute extends Route {
  @service store;
  async model() {
    let data = await this.store.findAll('daily-forecast');
    console.log(data.content[0]);
    return data;
  }
}
