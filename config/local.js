var env = process.env;

const production = require('./production'),
      util = require('../lib/util'),
      extend = util.extend,
      parseBool = util.parseBool;

extend(exports, production, {
  ip_address: env['IP_ADDRESS'] || "127.0.0.1",
  port: env['PORT'] || 3000,
  use_minified_resources: parseBool(env['MINIFIED'] || false)
});

exports.url = exports.ip_address + ":" + exports.port;

