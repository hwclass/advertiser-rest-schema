'use strict';

import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';
import Koa from 'koa';
import logger from 'koa-logger';
import { PORT } from './config/development';
import routing from './routes/';

const app = new Koa();

app
  .use(convert(logger()))
  .use(bodyParser());

routing(app);

app.listen(PORT, () => console.log(`✅  The server is running at http://localhost:${PORT}/`));

export default app;