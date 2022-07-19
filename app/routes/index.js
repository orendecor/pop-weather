import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class IndexRoute extends Route {
  async model() {
    const API_KEY = 'wrAzRR71G3kXx3oFS6nwDgtl0Iyhdx1A';
    const response = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=${API_KEY}`
    );
    const { DailyForecasts } = await response.json();

    return DailyForecasts;
  }
}
