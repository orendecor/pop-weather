import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class DailyForecastSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let dayCounter = 0;
    return {
      data: payload.DailyForecasts.map((info) => {
        return {
          id: dayCounter++,
          type: 'daily-forecast',
          date: info.EpochDate,
        };
      }),
    };
  }
}
