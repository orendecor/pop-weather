import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class DailyForecastAdapter extends JSONAPIAdapter {
  host = 'http://dataservice.accuweather.com';
  namespace = 'forecasts/v1/daily/5day';
  query(store, type, query, recordArray, adapterOptions) {
    const params = {
      // TODO: add the apiKey through the env config file
      apikey: 'oqBVZqzF5XBY47dh3bQ7xnQMQ7AyLWyL',
    };
    return this.ajax(this.buildURL(query), 'GET', { data: params });
  }
  //in order to override adding 's' in the end of the modelname
  pathForType(modelName) {
    return modelName;
  }
}
