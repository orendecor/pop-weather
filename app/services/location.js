import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LocationService extends Service {
  @tracked locationId = '215854';

  get get() {
    return this.locationId;
  }

  @action
  set(locationId) {
    this.locationId = locationId;
  }
}
