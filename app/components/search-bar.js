import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SearchBarComponent extends Component {
  @service('location') locationId;
  @action
  onKeyUp(event) {
    this.locationId.set(event.target.value);
  }
}
