import { observable, action, toJS } from 'mobx';
import { remove, isUndefined } from 'lodash';
import remotedev from 'mobx-remotedev';

class AdvertisersStore {

  @observable advertisers;

  constructor() {
    this.advertisers = '';
  }

  @action('Sets advertisers')
  saveAdvertisers(advertisers) {
    this.removeAdvertisers();
    this.advertisers = advertisers;
  }

  @action('Adds user')
  addUser(user) {
    this.locationList.push(user);
  }

  @action('Gets user list')
  getUserList() {
    return this.locationList.peek();
  }

  @action('Removes location list item')
  removeAdvertisers() {
    remove(this.advertisers, !isUndefined);
  }

  toJS() {
    return this.advertisers.map(advertisers => toJS(advertisers));
  }

}

export default remotedev(new AdvertisersStore());

export { AdvertisersStore };
