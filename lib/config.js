/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const extend = require('./util').extend,
      env = process.env;

var configs = {
  production: require('../config/production'),
  local: require('../config/local')
};

var environment = env['NODE_ENV'] || "production";
extend(exports, configs[environment]);

console.log("using environment: " + environment);
console.log(exports);

