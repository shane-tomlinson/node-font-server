var env = process.env;

const util = require('../lib/util'),
      extend = util.extend,
      parseBool = util.parseBool;


extend(exports, {
  url: env['URL'] || "fontserver.yourdomain.org",
  use_minified_resources: parseBool(env['MINIFIED'] || true),
  https: parseBool(env['HTTPS'] || true),
  'access-control-allow-origin': env['ACCESS_CONTROL_ALLOW_ORIGIN'] || '*'
});
