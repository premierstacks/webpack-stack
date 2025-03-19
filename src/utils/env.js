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

export function isWebpackServe(env) {
  return env.WEBPACK_SERVE || false;
}

export function isWebpackBuild(env) {
  return env.WEBPACK_BUILD || false;
}

export function isWebpackWatch(env) {
  return env.WEBPACK_WATCH || false;
}

export function getWebpackMode(env, argv) {
  return argv.mode;
}

export function getNodeEnv(env, argv) {
  return argv.nodeEnv;
}

export function isWebpackModeDevelopment(env, argv) {
  return getWebpackMode(env, argv) === 'development';
}

export function isWebpackModeProduction(env, argv) {
  return getWebpackMode(env, argv) === 'production';
}

export function isNodeEnvDevelopment(env, argv) {
  return getNodeEnv(env, argv) === 'development';
}

export function isNodeEnvProduction(env, argv) {
  return getNodeEnv(env, argv) === 'production';
}
