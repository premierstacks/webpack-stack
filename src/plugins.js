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
import { constants } from 'zlib';
import webpack from 'webpack';
import { getAppEnv, getAppName, getAppVersion, getNodeEnv, getWebpackMode } from './env';

export function withPluginCopy(env, argv, config, options = {}) {
  void env;
  void argv;

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
        ...options,
      }),
    ],
  };
}

export function withPluginHtml(env, argv, config, options = {}) {
  void env;
  void argv;

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
        ...options,
      }),
    ],
  };
}

export function withPluginGzip(env, argv, config, options = {}) {
  void env;
  void argv;

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
        ...options,
      }),
    ],
  };
}

export function withPluginBrotli(env, argv, config, options = {}) {
  void env;
  void argv;

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
        ...options,
      }),
    ],
  };
}

export function withPluginEnvironment(env, argv, config, options = {}) {
  void env;
  void argv;

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.EnvironmentPlugin({
        NODE_ENV: getNodeEnv(env, argv),
        WEBPACK_MODE: getWebpackMode(env, argv),
        APP_NAME: getAppName(env, argv),
        APP_VERSION: getAppVersion(env, argv),
        APP_ENV: getAppEnv(env, argv),
        ...options,
      }),
    ],
  };
}

export function withPluginDefine(env, argv, config, options = {}) {
  void env;
  void argv;

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        global: 'globalThis',
        ...options,
      }),
    ],
  };
}
