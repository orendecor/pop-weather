import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default class DailyForecastAdapter extends JSONAPIAdapter {
  host = 'http://dataservice.accuweather.com';
  namespace = 'forecasts/v1/daily/5day';
  pathForType() {
    const locationId = '215854';
    const apiKey = 'wrAzRR71G3kXx3oFS6nwDgtl0Iyhdx1A';
    return `${locationId}?apikey=${apiKey}`;
  }
}
