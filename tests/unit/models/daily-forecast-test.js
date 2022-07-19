import { module, test } from 'qunit';
import { setupTest } from 'pop-weather/tests/helpers';

module('Unit | Model | daily forecast', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('daily-forecast', {});
    assert.ok(model);
  });
});
