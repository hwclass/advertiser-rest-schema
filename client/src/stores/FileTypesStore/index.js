import { observable, action } from 'mobx';
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

  @action('Removes location list item')
  removeFileTypes() {
    remove(this.fileTypes, !isUndefined);
  }

}

export default remotedev(new FileTypesStore());

export { FileTypesStore };
