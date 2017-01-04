// import { connect } from './../../../../helpers/database';
// import CONFIG from './../../../../config.js';
// import utility from './../../../../helpers/utility.js';

/**
 * getFileTypes() : The method to get the all file types
 *
 * @noparam
*/
const getFileTypes = async() => {
  let fileTypes = ['json', 'xml'];
  return new Promise((resolve, reject) => {
    resolve(fileTypes);
  });
};

export default getFileTypes;