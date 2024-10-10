/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2024–Present Tomáš Chochola <chocholatom1997@gmail.com>. All rights reserved.
 *
 * @license
 *
 * This software is proprietary and licensed under specific terms set by its owner.
 * Any form of access, use, or distribution requires a valid and active license.
 * For full licensing terms, refer to the LICENSE.md file accompanying this software.
 *
 * @see {@link https://premierstacks.com} Website
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

export function isWebpackDevelopment(env, argv) {
  return getWebpackMode(env, argv) === 'development';
}

export function isWebpackProduction(env, argv) {
  return getWebpackMode(env, argv) === 'production';
}
