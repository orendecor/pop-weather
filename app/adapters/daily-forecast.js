import RESTAdapter from '@ember-data/adapter/rest';

export default class DailyForecastAdapter extends RESTAdapter {
  // host = 'http://dataservice.accuweather.com';
  // namespace = 'forecasts/v1/daily/5day';
  // pathForType() {
  //   return '215854?apikey=wrAzRR71G3kXx3oFS6nwDgtl0Iyhdx1A';
  // }
  urlForFindAll(modelName,snapshot) {
    return 'test.json';
  }
}
