import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import PromiseProxyMixin from '@ember/object/promise-proxy-mixin';
import ArrayProxy from '@ember/array/proxy';

import { computed } from '@ember/object';

const ObjectPromiseProxy = ArrayProxy.extend(PromiseProxyMixin);

export default class FiveDaysForecastComponent extends Component {
  @service store;

  @computed('args.cityId')
  get dailyForecastPromise() {
    try {
      let promise = this.store.query('daily-forecast', this.args.cityId);
      return ObjectPromiseProxy.create({ promise });
    } catch (e) {
      return { error: e };
    }
  }
}
