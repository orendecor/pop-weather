import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import PromiseProxyMixin from '@ember/object/promise-proxy-mixin';
import ObjectProxy from '@ember/object/proxy';
import ArrayProxy from '@ember/object/proxy';
import { tracked } from '@glimmer/tracking';
import { reads } from '@ember/object/computed';

const ObjectPromiseProxy = ObjectProxy.extend(PromiseProxyMixin);
const ArrayPromiseProxy = ArrayProxy.extend(PromiseProxyMixin);

export default class ForecastComponent extends Component {
  @service store;

  dailyForecastPromise() {
    try {
      let promise = this.store.query('daily-forecast', this.args.cityName);
      return ArrayPromiseProxy.create({ promise });
    } catch (e) {
      return { error: e };
    }
  }

  dailyForecasts = reads('dailyForecastPromise').readOnly();
  // get forecast() {
  //   try {
  //     let forecastPromise = this.store.query(
  //       'daily-forecast',
  //       this.cityModel.id
  //     );
  //     return ObjectPromiseProxy.create({ forecastPromise });
  //   } catch (e) {
  //     return { error: e };
  //   }
  // }
}
