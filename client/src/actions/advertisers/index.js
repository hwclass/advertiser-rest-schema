import { ADVERTISERS_URL } from '../../constants/api';
import * as headers from '../../constants/headers';
import { appStore, advertisersStore } from '../../stores/';

export const getAdvertisers = (dataType) => {
  headers.default['Content-Type'] = 'application/' + dataType;
  fetch(ADVERTISERS_URL, { method: 'GET', mode: 'cors', headers: headers.default })
    .then((response) => {
      /*
      this.protocol = '';
      this.statusCode = '';
      this.statusString = '';
      this.httpVaryHeader = '';
      this.httpVaryHeaderValue = '';
      this.httpAllowHeader = '';
      this.httpAllowHeaderValue = '';
      this.httpContentTypeHeader = '';
      this.httpContentTypeHeaderValue = '';
      */
      console.log(response);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.type);
      console.log(response.headers.get('vary'));
      console.log(response.headers.get('access-control-allow-credentials'));
      console.log(response.headers.getAll('Allow'));
      console.log(response.headers.getAll('Content-Type'));
      appStore.saveResponseProps({
        statusCode: response.status,
        statusString: response.statusText
      });
      return response.text();
    })
    .then(data => {
      advertisersStore.saveAdvertisers((dataType === 'json' ? JSON.parse(data) : data));
    })
    .catch(error => error);
};
