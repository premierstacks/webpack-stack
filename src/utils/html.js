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

import HtmlWebpackPlugin from 'html-webpack-plugin';

const def = { template: './node_modules/@premierstacks/webpack-stack/assets/index.html', filename: 'index.html', xhtml: true, inject: true, chunks: 'all', publicPath: 'auto' };

export function html(env, argv, config, options = def) {
  config.plugins = config.plugins || [];

  config.plugins.push(new HtmlWebpackPlugin({ ...def, ...options }));

  return config;
}
