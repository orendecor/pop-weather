import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default class DailyForecastAdapter extends JSONAPIAdapter {
  host = 'http://dataservice.accuweather.com';
  namespace = 'forecasts/v1/daily/5day';
  pathForType() {
    return '215854?apikey=wrAzRR71G3kXx3oFS6nwDgtl0Iyhdx1A';
  }
}
