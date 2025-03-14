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

import CompressionPlugin from 'compression-webpack-plugin';
import { constants } from 'zlib';

export function removeAvailableModules(env, argv, config) {
  config.optimization = config.optimization || {};

  config.optimization.removeAvailableModules = true;

  return config;
}

export function splitChunksAll(env, argv, config) {
  config.optimization = config.optimization || {};

  config.optimization.splitChunks = {
    chunks: 'all',
  };

  return config;
}

export function runtimeSingle(env, argv, config) {
  config.optimization = config.optimization || {};

  config.optimization.runtime = 'single';

  return config;
}

export function compress(env, argv, config) {
  compressGzip(env, argv, config);
  compressBrotli(env, argv, config);

  return config;
}

export function compressGzip(env, argv, config) {
  config.plugins = config.plugins || [];

  config.plugins.push(
    new CompressionPlugin({
      algorithm: 'gzip',
      compressionOptions: { level: 9 },
      minRatio: Infinity,
      filename: '[path][base].gz[query][fragment]',
    }),
  );

  return config;
}

export function compressBrotli(env, argv, config) {
  config.plugins = config.plugins || [];

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
