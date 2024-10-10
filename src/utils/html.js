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

import HtmlWebpackPlugin from 'html-webpack-plugin';

const def = { template: './node_modules/@premierstacks/webpack-stack/assets/index.html', filename: 'index.html', xhtml: true, emit: true, chunks: ['index'] };

export function html(env, argv, config, options = def) {
  config.plugins = config.plugins || [];
  config.plugins.push(new HtmlWebpackPlugin({ ...def, ...options }));

  return config;
}
