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

  @action
  onlyIntegerValidator(e) {
    const input = e.target;
    const errMsg = 'Must be an integer';
    const inputFilter = function (value) {
      return /^-?\d*$/.test(value);
    };
    if (inputFilter(input.value)) {
      // Accepted value

      if (['keydown', 'mousedown', 'focusout'].indexOf(e.type) >= 0) {
        input.classList.remove('input-error');
        input.setCustomValidity('');
      }
      input.oldValue = input.value;
      input.oldSelectionStart = input.selectionStart;
      input.oldSelectionEnd = input.selectionEnd;
    } else if (Object.prototype.hasOwnProperty.call(input, 'oldValue')) {
      // Rejected value - restore the previous one
      input.classList.add('input-error');
      input.setCustomValidity(errMsg);
      input.reportValidity();
      input.value = input.oldValue;
      input.setSelectionRange(input.oldSelectionStart, input.oldSelectionEnd);
    } else {
      // Rejected value - nothing to restore
      input.value = '';
    }
  }
}
