const headers = {
  ACCESS_CONTROL_ALLOW_ORIGIN: 'http://localhost:8083',
  ACCESS_CONTROL_ALLOW_CREDENTIALS: 'true',
  ACCESS_CONTROL_ALLOW_HEADERS: 'Content-Type,x-requested-with,Authorization,Access-Control-Allow-Origin'
};

export default {
  'Access-Control-Allow-Origin': headers.ACCESS_CONTROL_ALLOW_ORIGIN,
  'Access-Control-Allow-Credentials': headers.ACCESS_CONTROL_ALLOW_CREDENTIALS,
  'Access-Control-Allow-Headers': headers.ACCESS_CONTROL_ALLOW_HEADERS
};
