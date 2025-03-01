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

import CopyPlugin from 'copy-webpack-plugin';

const def = { patterns: [{ from: './public', to: '.' }] };

export function copy(env, argv, config, options = def) {
  config.plugins = config.plugins || [];
  config.plugins.push(new CopyPlugin({ ...def, ...options }));

  return config;
}
