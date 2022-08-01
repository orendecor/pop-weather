import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { test } from '@ember/test';

export default class SearchBarComponent extends Component {
  @tracked inputCityName = '';
  @tracked isDisabled = true;
  @service router;

  @action
  onKeyUp(event) {
    this.toggleSubmitButton(event.target.value);
    this.sendFormOnEnter(event.keyCode);
  }

  @action
  searchLocation() {
    this.args.setCityName(this.inputCityName);
  }

  toggleSubmitButton = (input) => {
    if (input !== '') {
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
