import JSONAPISerializer from '@ember-data/serializer/json-api';

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
        },
      };
      return payload;
    }
  }
}
