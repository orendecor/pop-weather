import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// import fetch from 'fetch';

export default class IndexRoute extends Route {
  @service store;
  async model(params) {
    try {
      const data = await this.store.query(
        'daily-forecast',
        params.location_id ? params.location_id : '524901'
      );
      return { data: data };
    } catch (e) {
      return { error: e };
    }
  }
}
