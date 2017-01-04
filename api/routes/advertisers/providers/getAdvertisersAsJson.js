// import { connect } from './../../../../helpers/database';
// import CONFIG from './../../../../config.js';
// import utility from './../../../../helpers/utility.js';

/**
 * getAdvertisersAsJson() : The method to get the all advertisers as json
 *
 * @noparam
*/
const getAdvertisersAsJson = async() => {
  let jsonData = [
    {
      "id": 1,
      "name": "MockAdvertiser",
      "external_id": "1",
      "impressions": 52721284,
      "clicks": 93149
    }
  ];
  return new Promise((resolve, reject) => {
    resolve(jsonData);
  });
};

export default getAdvertisersAsJson;