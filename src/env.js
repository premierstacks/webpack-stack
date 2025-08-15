/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2025 Tomáš Chochola <chocholatom1997@gmail.com>
 *
 * @license CC-BY-ND-4.0
 *
 * @see {@link https://creativecommons.org/licenses/by-nd/4.0/} License
 * @see {@link https://github.com/tomchochola} GitHub Personal
 * @see {@link https://github.com/premierstacks} GitHub Organization
 * @see {@link https://github.com/sponsors/tomchochola} GitHub Sponsors
 */

export function isWebpackServe(env) {
  return env.WEBPACK_SERVE ?? false;
}

export function isWebpackBuild(env) {
  return env.WEBPACK_BUILD ?? false;
}

export function isWebpackWatch(env) {
  return env.WEBPACK_WATCH ?? false;
}

export function getWebpackMode(_env, argv) {
  return argv.mode ?? 'production';
}

export function getNodeEnv(_env, argv) {
  return argv.nodeEnv ?? 'production';
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
