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

export function reactChunks(env, argv, config) {
  config.optimization = config.optimization || {};
  config.optimization.splitChunks = config.optimization.splitChunks || {};
  config.optimization.splitChunks.cacheGroups = config.optimization.splitChunks.cacheGroups || {};

  config.optimization.splitChunks.cacheGroups.react = {
    test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
    name: 'react',
    chunks: 'all',
  };

  return config;
}

export function vendorChunks(env, argv, config) {
  config.optimization = config.optimization || {};
  config.optimization.splitChunks = config.optimization.splitChunks || {};
  config.optimization.splitChunks.cacheGroups = config.optimization.splitChunks.cacheGroups || {};

  config.optimization.splitChunks.cacheGroups.vendor = {
    test: /[\\/]node_modules[\\/]/,
    name: 'vendor',
    chunks: 'all',
  };

  return config;
}

export function splitChunks(env, argv, config) {
  config.optimization = config.optimization || {};
  config.optimization.splitChunks = config.optimization.splitChunks || {};
  config.optimization.splitChunks.chunks = 'all';

  return config;
}
