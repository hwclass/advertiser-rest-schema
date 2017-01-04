import convert from 'koa-convert';
import cors from 'kcors';
import getForFileTypes from './fileTypes/methods/get';
import getForFileAdvertisers from './advertisers/methods/get';
import { PROTOCOL, HOST, CLIENT_PORT, SERVER_HEADERS, SERVER_METHODS } from '../config/development';

const routes = [
  getForFileTypes,
  getForFileAdvertisers
];

export default function (app) {
  routes.forEach((route) => {
    app
      .use(route.routes())
      .use(route.allowedMethods({
        throw: true,
      }))
      .use(convert(cors({
        origin: PROTOCOL + HOST + ':' + CLIENT_PORT,
        headers: SERVER_HEADERS,
        methods: SERVER_METHODS,
        credentials: true
      })));
  });
};