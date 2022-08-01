import AccuWeatherAdapter from './accu-weather';
export default class CityAdapter extends AccuWeatherAdapter {
  // namespace = 'locations/v1/cities/search';
  // queryRecord(store, type, query) {
  //   const params = {
  //     ...this.defaultParams,
  //     q: query,
  //   };
  //   return this.ajax(this.buildURL(), 'GET', { data: params });
  // }
}
