import Model, { attr } from '@ember-data/model';

export default class DailyForecastModel extends Model {
  @attr EpochDate;
  @attr Temperature;
  @attr max;
  @attr min;
  @attr description;
}
