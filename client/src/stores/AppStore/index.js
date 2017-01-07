import { observable, action, computed } from 'mobx';
import remotedev from 'mobx-remotedev';

class AppStore {

  @observable protocol;

  @observable statusCode;

  @observable statusString;

  @observable httpVaryHeader;

  @observable httpVaryHeaderValue;

  @observable httpAllowHeader;

  @observable httpAllowHeaderValue;

  @observable httpContentTypeHeader;

  @observable httpContentTypeHeaderValue;

  constructor() {
    this.protocol = '';
    this.statusCode = '';
    this.statusString = '';
    this.httpVaryHeader = '';
    this.httpVaryHeaderValue = '';
    this.httpAllowHeader = '';
    this.httpAllowHeaderValue = '';
    this.httpContentTypeHeader = '';
    this.httpContentTypeHeaderValue = '';
  }

  @action('Sets response object')
  saveResponseProps(responseObject) {
    this.protocol = responseObject.protocol;
    this.statusCode = responseObject.statusCode;
    this.statusString = responseObject.statusString;
    this.httpVaryHeader = responseObject.httpVaryHeader;
    this.httpVaryHeaderValue = responseObject.httpVaryHeaderValue;
    this.httpAllowHeader = responseObject.httpAllowHeader;
    this.httpAllowHeaderValue = responseObject.httpAllowHeaderValue;
    this.httpContentTypeHeader = responseObject.httpContentTypeHeader;
    this.httpContentTypeHeaderValue = responseObject.httpContentTypeHeaderValue;
  }

  @computed get responseObject() {
    return {
      protocol: this.protocol,
      statusCode: this.statusCode,
      statusString: this.statusString,
      httpVaryHeader: this.httpVaryHeader,
      httpVaryHeaderValue: this.httpVaryHeaderValue,
      httpAllowHeader: this.httpAllowHeader,
      httpAllowHeaderValue: this.httpAllowHeaderValue,
      httpContentTypeHeader: this.httpContentTypeHeader,
      httpContentTypeHeaderValue: this.httpContentTypeHeaderValue
    };
  }

}

export default remotedev(new AppStore());

export { AppStore };
