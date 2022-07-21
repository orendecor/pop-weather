import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from '../config/environment';
export default class DailyForecastAdapter extends JSONAPIAdapter {
  /*
  comment all the following lines for mock API
  */
  host = '//dataservice.accuweather.com';
  namespace = 'forecasts/v1/daily/5day';
  query(store, type, query, recordArray, adapterOptions) {
    const params = {
      apikey: encodeURIComponent(ENV.ACCUWEATHER_APIKEY),
    };
    return this.ajax(this.buildURL(query), 'GET', { data: params });
  }
  //in order to override adding 's' in the end of the modelname
  pathForType(modelName) {
    return modelName;
  }
}
