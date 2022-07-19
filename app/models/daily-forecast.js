import Model, { attr } from '@ember-data/model';

export default class DailyForecastModel extends Model {
  @attr date;
  @attr Temperature;
  @attr max;
  @attr min;
  @attr description;
}
