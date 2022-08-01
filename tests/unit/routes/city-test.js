import { module, test } from 'qunit';
import { setupTest } from 'pop-weather/tests/helpers';

module('Unit | Route | city', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:city');
    assert.ok(route);
  });
});
