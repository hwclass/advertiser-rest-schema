import { observable, action, toJS } from 'mobx';
import { forEach, remove, isUndefined } from 'lodash';
import { DEFAULT_ANIMATION, ZOOM } from '../../constants/map';
import remotedev from 'mobx-remotedev';

class UserLocationListStore {

  @observable locationList;

  constructor() {
    this.locationList = [];
    this.defaultAnimation = DEFAULT_ANIMATION;
    this.zoom = ZOOM;
  }

  @action('Sets location list')
  setLocationList(locationList) {
    this.removeLocationListItems();
    forEach(locationList, (item) => {
      this.locationList.push({
        key: item.key,
        name: item.name,
        position: {
          lat: parseFloat(item.position.lat),
          lng: parseFloat(item.position.lng)
        },
        location: item.location,
        defaultAnimation: this.defaultAnimation,
        zoom: this.zoom
      });
    });
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
  removeLocationListItems() {
    remove(this.locationList, !isUndefined);
  }

  toJS() {
    return this.locationList.map(location => toJS(location));
  }

}

export default remotedev(new UserLocationListStore());

export { UserLocationListStore };
