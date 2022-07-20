import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SearchBarComponent extends Component {
  @tracked locationId = '';
  @service router;

  @action
  onKeyUp(event) {
    const ENTER_KEY_CODE = 13;
    if (event.keyCode === ENTER_KEY_CODE) {
      this.searchLocation();
    }
  }

  @action
  searchLocation() {
    // window.location.href = `/${this.locationId.get}`;
    this.router.transitionTo(`/${this.locationId}`);
  }
}
