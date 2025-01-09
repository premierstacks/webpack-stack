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

import CompressionPlugin from 'compression-webpack-plugin';
import { constants } from 'zlib';
import { splitChunks } from './chunks.js';

export function optimize(env, argv, config) {
  splitChunks(env, argv, config);
  removeAvailableModules(env, argv, config);

  return config;
}

export function removeAvailableModules(env, argv, config) {
  config.optimization = config.optimization || {};
  config.optimization.removeAvailableModules = true;

  return config;
}

export function compress(env, argv, config) {
  config.plugins = config.plugins || [];

  config.plugins.push(
    new CompressionPlugin({
      algorithm: 'gzip',
      compressionOptions: { level: 9 },
      minRatio: Infinity,
      filename: '[path][base].gz[query][fragment]',
    }),
  );

  config.plugins.push(
    new CompressionPlugin({
      algorithm: 'brotliCompress',
      compressionOptions: { [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MAX_QUALITY },
      minRatio: Infinity,
      filename: '[path][base].br[query][fragment]',
    }),
  );

  return config;
}
