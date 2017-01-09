import { ADVERTISERS_URL } from '../../constants/api';
import * as headers from '../../constants/headers';
import { appStore, advertisersStore } from '../../stores/';

export const getAdvertisers = (dataType) => {
  headers.default['Content-Type'] = 'application/' + dataType;
  fetch(ADVERTISERS_URL, { method: 'GET', mode: 'cors', headers: headers.default })
    .then((response) => {
      appStore.saveResponseProps({
        statusCode: response.status,
        statusString: response.statusText
      });
      return response.text();
    })
    .then(data => {
      advertisersStore.saveAdvertisers((dataType === 'json' ? JSON.parse(data) : decodeURI(data)));
    })
    .catch(error => error);
};
