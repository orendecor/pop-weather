import AccuWeatherAdapter from './accu-weather';
export default class DailyForecastAdapter extends AccuWeatherAdapter {
  namespace = 'forecasts/v1/daily/5day';
  query(store, type, query) {
    return this.ajax(this.buildURL(query), 'GET', { data: this.defaultParams });
  }
}
