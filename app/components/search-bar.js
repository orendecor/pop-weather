import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SearchBarComponent extends Component {
  @service('location') locationId;
  @service router;
  @action
  onKeyUp(event) {
    this.locationId.set(event.target.value);
  }
  @action
  onKeyDown(event) {
    const ENTER_KEY_CODE = 13;
    if (event.keyCode === ENTER_KEY_CODE) {
      this.searchLocation();
    }
  }

  @action
  searchLocation() {
    // window.location.href = `/${this.locationId.get}`;
    this.router.transitionTo(`/${this.locationId.get}`);
  }
}
