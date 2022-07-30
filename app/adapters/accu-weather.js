import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from '../config/environment';
export default class AccuWeatherAdapter extends JSONAPIAdapter {
  host = '//dataservice.accuweather.com';
  defaultParams = {
    apikey: encodeURIComponent(ENV.ACCUWEATHER_APIKEY),
  };
  //in order to override adding 's' in the end of the modelname
  pathForType(modelName) {
    return modelName;
  }
}
