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

import { WebpackStack } from './builder.js';

export function base(env, argv, preset = {}, options = {}) {
  const {
    html = true,
    copy = true,
    brotli = true,
    gzip = true,
    css = true,
  } = preset;

  let config = WebpackStack.create(env, argv, options);

  if (config.isProduction) {
    if (brotli) {
      config = config.brotli();
    }

    if (gzip) {
      config = config.gzip();
    }

    if (css) {
      config = config.css();
    }
  }

  if (html) {
    config = config.html();
  }

  if (copy) {
    config = config.copy();
  }

  return config;
}
