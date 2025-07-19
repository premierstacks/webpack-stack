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

export function applyWebpackChunksReact(env, argv, config) {
  config.optimization = config.optimization ?? {};
  config.optimization.splitChunks = config.optimization.splitChunks ?? {};
  config.optimization.splitChunks.cacheGroups = config.optimization.splitChunks.cacheGroups ?? {};

  config.optimization.splitChunks.cacheGroups.react = {
    test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
    name: 'react',
    chunks: 'all',
  };

  return config;
}

export function applyWebpackChunksVendor(env, argv, config) {
  config.optimization = config.optimization ?? {};
  config.optimization.splitChunks = config.optimization.splitChunks ?? {};
  config.optimization.splitChunks.cacheGroups = config.optimization.splitChunks.cacheGroups ?? {};

  config.optimization.splitChunks.cacheGroups.vendor = {
    test: /[\\/]node_modules[\\/]/,
    name: 'vendor',
    chunks: 'all',
  };

  return config;
}

export function applyWebpackExternalsReact(env, argv, config) {
  config.externals = config.externals ?? {};

  config.externals.react = 'react';
  config.externals['react-dom'] = 'react-dom';
  config.externals['react-router'] = 'react-router';
  config.externals['react-router-dom'] = 'react-router-dom';

  return config;
}
