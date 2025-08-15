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

import { createWebpackConfig } from './base.js';
import { getNodeEnv, getWebpackMode, isNodeEnvDevelopment, isWebpackBuild, isWebpackModeDevelopment, isWebpackModeProduction, isWebpackServe, isWebpackWatch } from './env.js';
import { withPluginBrotli, withPluginCopy, withPluginCss, withPluginGzip, withPluginHtml } from './plugins.js';
import * as presets from './presets.js';

export class WebpackStack {
  #env;
  #argv;
  #config;
  #options;

  constructor(env, argv, config, options = {}) {
    this.#env = env;
    this.#argv = argv;
    this.#config = config;
    this.#options = options;
  }

  static create(env, argv, options = {}) {
    if (isNodeEnvDevelopment(env, argv)) {
      throw new Error('https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production');
    }

    const merged = {
      ...options,
      environment: options.environment ?? process.env.NODE_ENV ?? 'production',
    };

    return new WebpackStack(env, argv, createWebpackConfig(env, argv, merged), merged);
  }

  copy(options = {}, override = {}) {
    return new WebpackStack(this.#env, this.#argv, withPluginCopy(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  html(options = {}, override = {}) {
    return new WebpackStack(this.#env, this.#argv, withPluginHtml(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  css(options = {}, override = {}) {
    return new WebpackStack(this.#env, this.#argv, withPluginCss(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  gzip(options = {}, override = {}) {
    return new WebpackStack(this.#env, this.#argv, withPluginGzip(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  brotli(options = {}, override = {}) {
    return new WebpackStack(this.#env, this.#argv, withPluginBrotli(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  options(options) {
    return new WebpackStack(this.#env, this.#argv, this.#config, {
      ...this.#options,
      ...options,
    });
  }

  build() {
    return this.#config;
  }

  static get Presets() {
    return presets;
  }

  get isProduction() {
    return isWebpackModeProduction(this.#env, this.#argv);
  }

  get isDevelopment() {
    return isWebpackModeDevelopment(this.#env, this.#argv);
  }

  get isBuild() {
    return isWebpackBuild(this.#env, this.#argv);
  }

  get isWatched() {
    return isWebpackWatch(this.#env, this.#argv);
  }

  get isServed() {
    return isWebpackServe(this.#env, this.#argv);
  }

  get mode() {
    return getWebpackMode(this.#env, this.#argv);
  }

  get nodeEnv() {
    return getNodeEnv(this.#env, this.#argv);
  }
}
