import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';

export default class DailyForecastAdapter extends JSONAPIAdapter {
  @service('location') locationId;
  host = 'http://dataservice.accuweather.com';
  namespace = 'forecasts/v1/daily/5day';
  query(store, type, query, recordArray, adapterOptions) {
    const params = {
      // TODO: add the apiKey through the env config file
      apikey: 'wrAzRR71G3kXx3oFS6nwDgtl0Iyhdx1A',
    };
    return this.ajax(this.buildURL(query), 'GET', { data: params });
  }
  //in order to override adding 's' in the end of the modelname
  pathForType(modelName) {
    return modelName;
  }
}
