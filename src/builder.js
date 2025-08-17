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
import { getAppEnv, getAppName, getAppVersion, getNodeEnv, getWebpackMode, isNodeEnvDevelopment, isWebpackBuild, isWebpackModeDevelopment, isWebpackModeProduction, isWebpackServe, isWebpackWatch } from './env.js';
import { withPluginBrotli, withPluginCopy, withPluginDefine, withPluginEnvironment, withPluginGzip, withPluginHtml } from './plugins.js';
import * as presets from './presets.js';

export class WebpackStack {
  #env;
  #argv;
  #config;

  constructor(env, argv, config) {
    this.#env = env;
    this.#argv = argv;
    this.#config = config;
  }

  static create(env, argv) {
    if (isNodeEnvDevelopment(env, argv)) {
      throw new Error('https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production');
    }

    return new WebpackStack(env, argv, createWebpackConfig(env, argv));
  }

  copy(options = {}) {
    return new WebpackStack(this.#env, this.#argv, withPluginCopy(this.#env, this.#argv, this.#config, options));
  }

  html(options = {}) {
    return new WebpackStack(this.#env, this.#argv, withPluginHtml(this.#env, this.#argv, this.#config, options));
  }

  gzip(options = {}) {
    return new WebpackStack(this.#env, this.#argv, withPluginGzip(this.#env, this.#argv, this.#config, options));
  }

  brotli(options = {}) {
    return new WebpackStack(this.#env, this.#argv, withPluginBrotli(this.#env, this.#argv, this.#config, options));
  }

  environment(options = {}) {
    return new WebpackStack(this.#env, this.#argv, withPluginEnvironment(this.#env, this.#argv, this.#config, options));
  }

  define(options = {}) {
    return new WebpackStack(this.#env, this.#argv, withPluginDefine(this.#env, this.#argv, this.#config, options));
  }

  entry(options = {}) {
    return new WebpackStack(this.#env, this.#argv, {
      ...this.#config,
      entry: {
        ...this.#config.entry,
        ...options,
      },
    });
  }

  merge(callable) {
    return new WebpackStack(this.#env, this.#argv, callable(this.#env, this.#argv, this.#config));
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

  get appEnv() {
    return getAppEnv(this.#env, this.#argv);
  }

  get appVersion() {
    return getAppVersion(this.#env, this.#argv);
  }

  get appName() {
    return getAppName(this.#env, this.#argv);
  }
}
