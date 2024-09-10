/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright Copyright © 2024+ Tomáš Chochola <chocholatom1997@gmail.com> - All Rights Reserved
 *
 * @license
 *
 * This software is the exclusive property of Tomáš Chochola, protected by copyright laws.
 * Although the source code may be accessible, it is not free for use without a valid license.
 * A valid license, obtainable through proper channels, is required for any software use.
 * For licensing or inquiries, please contact Tomáš Chochola or refer to the GitHub Sponsors page.
 *
 * The full license terms are detailed in the LICENSE.md file within the source code repository.
 * The terms are subject to changes. Users are encouraged to review them periodically.
 *
 * @see {@link https://github.com/tomchochola} Personal GitHub
 * @see {@link https://github.com/premierstacks} Premierstacks GitHub
 * @see {@link https://github.com/sponsors/tomchochola} Sponsor & License
 * @see {@link https://premierstacks.com} Premierstacks website
 */

export function isEnvServe(env) {
  return env.WEBPACK_SERVE || false;
}

export function isEnvBuild(env) {
  return env.WEBPACK_BUILD || false;
}

export function isEnvWatch(env) {
  return env.WEBPACK_WATCH || false;
}

export function envMode(env, argv) {
  return argv.mode || argv.nodeEnv || 'production';
}

export function isEnvdevelopment(env, argv) {
  return mode(env, argv) === 'development';
}

export function isEnvproduction(env, argv) {
  return mode(env, argv) === 'production';
}
