// import { connect } from './../../../../helpers/database';
// import CONFIG from './../../../../config.js';
// import utility from './../../../../helpers/utility.js';

/**
 * getAdvertisersAsXml() : The method to get the all advertisers as xml
 *
 * @noparam
*/
const getAdvertisersAsXml = async() => {
  let xmlData = '<?xml version="1.0" encoding="UTF-8" ?><advertiser><id>1</id><name>MockAdvertiser</name><external_id>1</external_id><impressions>52721284</impressions><clicks>93149</clicks></advertiser>';
  return new Promise((resolve, reject) => {
    resolve(xmlData);
  });
};

export default getAdvertisersAsXml;