import EmberRouter from '@ember/routing/router';
import config from 'pop-weather/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('city', { path: '/city/:city_name' });
  this.route('index', { path: '/' });
});
