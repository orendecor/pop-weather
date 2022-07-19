import Model, { attr } from '@ember-data/model';

export default class DailyForecastModel extends Model {
  @attr('number') date;
  @attr('string') maxTemperature;
  @attr('string') minTemperature;
  @attr('string') description;
  @attr('string') iconId;
}
