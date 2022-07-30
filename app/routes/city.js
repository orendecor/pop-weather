import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// import fetch from 'fetch';

export default class CityRoute extends Route {
  @service store;
  async model(params) {
    try {
      const city = await this.store.queryRecord(
        'city',
        params.city_name ? params.city_name : 'Tel aviv'
      );
      // const dailyForecasts = await city.dailyForecasts;
      const dailyForecasts = await this.store.query('daily-forecast', city.id);
      city.dailyForecasts = dailyForecasts;
      return { city, dailyForecasts };
    } catch (e) {
      return { error: e };
    }
  }
}
