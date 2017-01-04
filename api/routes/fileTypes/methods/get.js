import Router from 'koa-router';
// import { connect } from './../../../../helpers/database';
import getFileTypes from '../providers/getFileTypes';

const router = new Router();

const CONSTANTS = {
  API: {
    PREFIX: 'api',
    GET: {
      FILE_TYPES: {
        ENDPOINT: 'fileTypes'
      }
    }
  }
}

//GET /api/fileTypes/
router.prefix(`/${CONSTANTS.API.PREFIX}/${CONSTANTS.API.GET.FILE_TYPES.ENDPOINT}`);

const provideAllFileTypes = async(alias) => {
  return await getFileTypes();
};

//Routes for get method
router
  .get(
    '/',
    async(context, next) => {
      try {
        context.body = await provideAllFileTypes();
        await next();
      } catch (err) {
        context.throw(500);
      }
    });

export default router;