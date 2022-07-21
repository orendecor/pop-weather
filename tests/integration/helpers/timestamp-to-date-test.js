import { module, test } from 'qunit';
import { setupRenderingTest } from 'pop-weather/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | timestamp-to-date', function (hooks) {
  setupRenderingTest(hooks);

  test('it transfer well timestamp to day / month format', async function (assert) {
    this.set('inputValue', '1658638800');

    await render(hbs`{{timestamp-to-date this.inputValue}}`);

    assert.dom(this.element).hasText('24 / 6');
  });
});
