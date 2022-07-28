import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SearchBarComponent extends Component {
  @tracked cityName = '';
  @tracked isDisabled = true;
  @service router;

  @action
  onKeyUp(event) {
    if (event.target.value !== '') {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }

    const ENTER_KEY_CODE = 13;
    if (event.keyCode === ENTER_KEY_CODE) {
      this.searchLocation();
    }
  }

  @action
  searchLocation() {
    this.router.transitionTo('city', this.cityName);
  }
}
