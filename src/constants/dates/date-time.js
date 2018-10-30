import moment from 'moment';

export const convertToCommonDateTime = (utc) => (
  moment(utc).format('ddd MM/DD/YY h:mm A')
);