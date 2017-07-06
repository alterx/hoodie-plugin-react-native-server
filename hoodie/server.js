'use strict';

module.exports.register = register;
module.exports.register.attributes = {
  'name': 'hoodie-plugin-react-native-server'
};

var CONTENT_TYPE = 'application/vnd.api+json';

function register(server, options, next) {
  server.ext('onRequest', function (request, reply) {
    if (request.headers['content-type'] && request.headers['content-type'].indexOf(CONTENT_TYPE) !== -1) {
      request.headers['content-type'] = CONTENT_TYPE;
    }
    reply.continue();
  });
  next();
}