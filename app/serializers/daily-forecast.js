import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class DailyForecastSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      data: payload.DailyForecasts.map((info) => {
        return {
          id: info.EpochDate,
          type: 'daily-forecast',
          attributes: {
            date: info.EpochDate,
            minTemperature: info.Temperature.Minimum.Value,
            maxTemperature: info.Temperature.Maximum.Value,
            description: info.Day.IconPhrase,
            iconId: info.Day.Icon,
          },
        };
      }),
    };
    return payload;
  }
}
