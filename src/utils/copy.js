/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2025, Tomáš Chochola <chocholatom1997@gmail.com>. Some rights reserved.
 *
 * @license CC-BY-ND-4.0
 *
 * @see {@link https://creativecommons.org/licenses/by-nd/4.0/} License
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
