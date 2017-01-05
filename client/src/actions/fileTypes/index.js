import { FILE_TYPES_URL } from '../../constants/api';
import { fileTypesStore } from '../../stores/';

export const getFileTypes = () => {
  fetch(FILE_TYPES_URL)
    .then(response => response.json())
    .then((fileTypes) => {
      fileTypesStore.saveFileTypes(fileTypes);
    });
};

export const setFileType = (fileType) => {
  fileTypesStore.setFileType(fileType);
};
