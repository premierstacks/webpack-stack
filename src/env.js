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

import { execSync } from 'child_process';

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

export function getAppEnv(env, argv) {
  return env.APP_ENV ?? argv.appEnv ?? process.env.APP_ENV ?? 'production';
}

export function getAppName(env, argv) {
  return env.APP_NAME ?? argv.appName ?? process.env.APP_NAME ?? process.env.npm_package_name ?? 'webpack-stack';
}

export function getAppVersion(env, argv) {
  return env.APP_VERSION ?? argv.appVersion ?? process.env.APP_VERSION ?? process.env.npm_package_version ?? execSync('git rev-parse HEAD').toString().trim(); // eslint-disable-line sonarjs/no-os-command-from-path
}
