import Model, { attr } from '@ember-data/model';

export default class DailyForecastModel extends Model {
  @attr Date;
  @attr('string') stam;
}
