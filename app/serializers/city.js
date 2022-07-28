import JSONAPISerializer from '@ember-data/serializer/json-api';
import ENV from '../config/environment';

export default class CitySerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload) {
    if (payload.length === 0) {
      return null;
    } else {
      const firstCity = payload[0];
      const cityId = firstCity.Key;

      payload = {
        data: {
          id: cityId,
          type: 'city',
          attributes: {
            name: firstCity.LocalizedName,
          },
          // relationships: {
          //   dailyForecasts: {
          //     links: {
          //       related: `'https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=${ENV.ACCUWEATHER_API_KEY}'`,
          //     },
          //   },
          // },
        },
      };
      return payload;
    }
  }
}
