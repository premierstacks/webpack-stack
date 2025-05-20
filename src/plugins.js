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
import HtmlWebpackPlugin from 'html-webpack-plugin';

const applyWebpackPluginCopyDef = {
  patterns: [
    {
      from: './public',
      to: '.',
    },
  ],
};

export function applyWebpackPluginCopy(env, argv, config, options = applyWebpackPluginCopyDef) {
  config.plugins = config.plugins ?? [];

  config.plugins.push(new CopyPlugin({
    ...applyWebpackPluginCopyDef,
    ...options,
  }));

  return config;
}

const applyWebpackPluginHtmlDef = {
  template: './node_modules/@premierstacks/webpack-stack/assets/index.html',
  filename: 'index.html',
  xhtml: true,
  inject: true,
  chunks: 'all',
  publicPath: 'auto',
};

export function applyWebpackPluginHtml(env, argv, config, options = applyWebpackPluginHtmlDef) {
  config.plugins = config.plugins ?? [];

  config.plugins.push(new HtmlWebpackPlugin({
    ...applyWebpackPluginHtmlDef,
    ...options,
  }));

  return config;
}
