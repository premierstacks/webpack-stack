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

import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { constants } from 'zlib';

export function withPluginCopy(env, argv, config, options = {}, override = {}) {
  void env;
  void argv;
  void options;

  const defaults = {
    patterns: [
      {
        from: './public',
        to: '.',
      },
    ],
  };

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new CopyPlugin({
        ...defaults,
        ...override,
      }),
    ],
  };
}

export function withPluginHtml(env, argv, config, options = {}, override = {}) {
  void env;
  void argv;
  void options;

  const defaults = {
    template: './node_modules/@premierstacks/webpack-stack/assets/index.html',
    filename: 'index.html',
    xhtml: true,
    inject: true,
    chunks: 'all',
    publicPath: 'auto',
  };

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new HtmlWebpackPlugin({
        ...defaults,
        ...override,
      }),
    ],
  };
}

export function withPluginCss(env, argv, config, options = {}, override = {}) {
  void env;
  void argv;
  void options;

  const defaults = {
    filename: 'immutable.[contenthash].css',
    chunkFilename: 'immutable.[contenthash].css',
  };

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new MiniCssExtractPlugin({
        ...defaults,
        ...override,
      }),
    ],
  };
}

export function withPluginGzip(env, argv, config, options = {}, override = {}) {
  void env;
  void argv;
  void options;

  const defaults = {
    algorithm: 'gzip',
    compressionOptions: { level: 9 },
    minRatio: Infinity,
    filename: '[path][base].gz[query][fragment]',
  };

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new CompressionPlugin({
        ...defaults,
        ...override,
      }),
    ],
  };
}

export function withPluginBrotli(env, argv, config, options = {}, override = {}) {
  void env;
  void argv;
  void options;

  const defaults = {
    algorithm: 'brotliCompress',
    compressionOptions: { [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MAX_QUALITY },
    minRatio: Infinity,
    filename: '[path][base].br[query][fragment]',
  };

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new CompressionPlugin({
        ...defaults,
        ...override,
      }),
    ],
  };
}
