import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import PromiseProxyMixin from '@ember/object/promise-proxy-mixin';
import ObjectProxy from '@ember/object/proxy';
import { computed } from '@ember/object';

const ObjectPromiseProxy = ObjectProxy.extend(PromiseProxyMixin);

export default class CityForecastComponent extends Component {
  @service store;

  @computed('args.cityName', 'cityName')
  get cityPromise() {
    try {
      let promise = this.store.queryRecord('city', this.args.cityName);
      return ObjectPromiseProxy.create({ promise });
    } catch (e) {
      return { error: e };
    }
  }
}
