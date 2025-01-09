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

export function reactExternals(env, argv, config) {
  config.externals = config.externals || {};

  config.externals.react = 'react';
  config.externals['react-dom'] = 'react-dom';
  config.externals['react-router'] = 'react-router';
  config.externals['react-router-dom'] = 'react-router-dom';
}
