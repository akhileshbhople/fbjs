/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule cssVar
 */

const fbCSSVars = require('fbjs-css-vars');
const invariant = require('invariant');

/**
 * @param {string} name
 */
function cssVar(name) {
  invariant(
    Object.prototype.hasOwnProperty.call(fbCSSVars, name),
    'Unknown key passed to cssVar: %s.',
    name
  );

  return fbCSSVars[name];
}

module.exports = cssVar;
