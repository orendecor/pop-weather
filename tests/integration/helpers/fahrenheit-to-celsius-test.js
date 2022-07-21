import { module, test } from 'qunit';
import { setupRenderingTest } from 'pop-weather/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | fahrenheit-to-celsius', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it trasform well the degrees', async function (assert) {
    this.set('inputValue', '70');

    await render(hbs`{{fahrenheit-to-celsius this.inputValue}}`);

    assert.dom(this.element).hasText('21');
  });
});
