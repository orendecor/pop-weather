import { module, test } from 'qunit';
import { setupTest } from 'pop-weather/tests/helpers';

module('Unit | Adapter | daily forecast', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:daily-forecast');
    assert.ok(adapter);
  });
});
