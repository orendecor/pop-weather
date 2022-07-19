import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';

export default class DailyForecastAdapter extends JSONAPIAdapter {
  @service('location') locationId;
  host = 'http://dataservice.accuweather.com';
  namespace = 'forecasts/v1/daily/5day';

  pathForType() {
    // TODO: add the apiKey through the env config file
    const apiKey = 'wrAzRR71G3kXx3oFS6nwDgtl0Iyhdx1A';
    return `${this.locationId.get}?apikey=${apiKey}`;
  }
}
