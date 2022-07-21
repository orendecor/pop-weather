import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  triggerKeyEvent,
  fillIn,
  click,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'pop-weather/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Acceptance | pop weather', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /223', async function (assert) {
    await visit('/223');

    assert.strictEqual(currentURL(), '/223');
  });

  test('it search when enter clicked', async function (assert) {
    await visit('/');

    await fillIn('input', '1122');
    await click('button');
    assert.dom('.day-card').exists({ count: 5 });
  });
  //TODO: understand why this test fails

  // test('it search on click on the button', async function (assert) {
  //   await visit('/');
  //
  //   await fillIn('input', '1122');
  //   triggerKeyEvent('input', 'keydown', 'Enter');
  //   assert.dom('.day-card').exists({ count: 5 });
  // });
});
