import { ADVERTISERS_URL } from '../../constants/api';
import * as headers from '../../constants/headers';
import { advertisersStore } from '../../stores/';

export const getAdvertisers = (dataType) => {
  headers.default['Content-Type'] = 'application/' + dataType;
  fetch(ADVERTISERS_URL, { method: 'GET', mode: 'cors', headers: headers.default })
    .then(response => response.text())
    .then(data => {
      advertisersStore.saveAdvertisers((dataType === 'json' ? JSON.parse(data) : data));
    })
    .catch(error => error);
};
