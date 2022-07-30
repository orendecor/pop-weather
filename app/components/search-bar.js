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
    this.toggleSubmitButton(event.target.value);
    this.sendFormOnEnter(event.keyCode);
  }

  @action
  searchLocation() {
    this.router.transitionTo('city', this.cityName);
  }

  toggleSubmitButton = (cityName) => {
    if (cityName !== '') {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  };

  sendFormOnEnter = (keyCode) => {
    const ENTER_KEY_CODE = 13;
    if (keyCode === ENTER_KEY_CODE) {
      this.searchLocation();
    }
  };
}
