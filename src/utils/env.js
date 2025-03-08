/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2025 Tomáš Chochola <chocholatom1997@gmail.com>
 *
 * @license Apache-2.0
 *
 * @see {@link http://www.apache.org/licenses/LICENSE-2.0} License
 * @see {@link https://github.com/tomchochola} GitHub Personal
 * @see {@link https://github.com/premierstacks} GitHub Organization
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

export function isWebpackModeDevelopment(env, argv) {
  return getWebpackMode(env, argv) === 'development';
}

export function isWebpackModeProduction(env, argv) {
  return getWebpackMode(env, argv) === 'production';
}
