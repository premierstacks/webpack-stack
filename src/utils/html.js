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

import HtmlWebpackPlugin from 'html-webpack-plugin';

const def = { template: './node_modules/@premierstacks/webpack-stack/assets/index.html', filename: 'index.html', xhtml: true, inject: true, chunks: 'all' };

export function html(env, argv, config, options = def) {
  config.plugins = config.plugins || [];
  config.plugins.push(new HtmlWebpackPlugin({ ...def, ...options }));

  return config;
}
