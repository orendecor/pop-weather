import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class DailyForecastSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      data: payload.DailyForecasts.map((info) => {
        return {
          id: info.EpochDate,
          type: 'daily-forecast',
          attributes: {
            try: 'oren',
          },
        };
      }),
    };
    return payload;
  }
}
