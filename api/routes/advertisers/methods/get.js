import Router from 'koa-router';
import getAdvertisersAsJson from '../providers/getAdvertisersAsJson';
import getAdvertisersAsXml from '../providers/getAdvertisersAsXml';

const router = new Router();

const CONSTANTS = {
  API: {
    PREFIX: 'api',
    GET: {
      ADVERTISERS: {
        ENDPOINT: 'advertisers'
      }
    }
  }
}

let dataTypes = {
  json: {type: 'json'}, 
  xml: {type: 'xml'}
};

let providerAlias = {
  json: 'getAdvertisersAsJson',
  xml: 'getAdvertisersAsXml'
}

//GET /api/fileTypes/
router.prefix(`/${CONSTANTS.API.PREFIX}/${CONSTANTS.API.GET.ADVERTISERS.ENDPOINT}`);

const provideAllAdvertisers = async(alias) => {
  return await (alias === dataTypes.json.type ? getAdvertisersAsJson() : getAdvertisersAsXml());
};

//Routes for get method
router
  .get(
    '/',
    async(context, next) => {
      try {
        context.type = 'application/' + context.request.header['content-type'];
        context.body = await provideAllAdvertisers(dataTypes[context.request.header['content-type'].split('/')[1]].type);
        await next();
      } catch (err) {
        context.throw(500);
      }
    });

export default router;