import { module, test } from 'qunit';
import { setupRenderingTest } from 'pop-weather/tests/helpers';
import { render, fillIn, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | search-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts only numbers in the search bar', async function (assert) {
    await render(hbs`<SearchBar />`);
    await fillIn('input', 'asss');
    //
    assert.dom('input').hasText('');
  });
  //TODO: understand why this test fails

  // test('it accepts numbers in the search bar', async function (assert) {
  //   await render(hbs`<SearchBar />`);
  //   await fillIn('input', '1122');
  //   //
  //   assert.dom('input').hasText('1122');
  // });

  test('the search button is disabled if blank field', async function (assert) {
    await render(hbs`<SearchBar />`);
    assert.dom('button').isDisabled();
  });

  test('the search button is enabled when field is not empty and contains location key', async function (assert) {
    await render(hbs`<SearchBar />`);
    await fillIn('input', '1122');

    assert.dom('button').isNotDisabled();
  });

  test('the search button is disabled when field is not valid location key', async function (assert) {
    await render(hbs`<SearchBar />`);
    await fillIn('input', 'ddd');
    assert.dom('button').isDisabled();
  });
});
