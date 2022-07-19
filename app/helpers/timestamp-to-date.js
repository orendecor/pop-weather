import { helper } from '@ember/component/helper';

export function timestampToDate(unix_timestamp) {
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix_timestamp * 1000);
  return `${date.getDate()} / ${date.getMonth()}`;
}

export default helper(timestampToDate);
