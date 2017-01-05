import { observable, action, toJS } from 'mobx';
import { forEach, remove, isUndefined } from 'lodash';
import remotedev from 'mobx-remotedev';

class FileTypesStore {

  @observable fileTypes;

  @observable selectedFileType;

  constructor() {
    this.fileTypes = [];
  }

  @action('Sets file types')
  saveFileTypes(fileTypes) {
    this.removeFileTypes();
    forEach(fileTypes, (item) => {
      this.fileTypes.push(item);
    });
  }

  @action('Sets file type')
  setFileType(fileType) {
    this.selectedFileType = fileType;
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
  removeFileTypes() {
    remove(this.fileTypes, !isUndefined);
  }

  toJS() {
    return this.locationList.map(location => toJS(location));
  }

}

export default remotedev(new FileTypesStore());

export { FileTypesStore };
