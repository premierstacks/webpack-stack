/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright Copyright © 2024+ Tomáš Chochola <chocholatom1997@gmail.com> - All Rights Reserved
 *
 * @license
 *
 * This software is proprietary property of Tomáš Chochola and protected by copyright laws.
 * A valid license is required for any use or manipulation of the software or source code.
 * The full license terms are detailed in the LICENSE.md file within the source code repository.
 *
 * @see {@link https://github.com/tomchochola} Personal GitHub
 * @see {@link https://premierstacks.com} Premierstacks website
 * @see {@link https://github.com/premierstacks} Premierstacks GitHub
 * @see {@link https://github.com/sponsors/tomchochola} GitHub Sponsors
 */

export function isWebpackServe(env, argv) {
  return env.WEBPACK_SERVE || argv.env?.WEBPACK_SERVE || false;
}

export function isWebpackBuild(env, argv) {
  return env.WEBPACK_BUILD || argv.env?.WEBPACK_BUILD || false;
}

export function isWebpackWatch(env, argv) {
  return env.WEBPACK_WATCH || argv.env?.WEBPACK_WATCH || false;
}

export function getWebpackMode(env, argv) {
  return argv['mode'] || argv['nodeEnv'] || 'production';
}

export function isWebpackDevelopment(env, argv) {
  return getWebpackMode(env, argv) === 'development';
}

export function isWebpackProduction(env, argv) {
  return getWebpackMode(env, argv) === 'production';
}
