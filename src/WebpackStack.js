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

import { execSync } from 'child_process';
import CompressionPlugin from 'compression-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlMinimizerPlugin from 'html-minimizer-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import JsonMinimizerPlugin from 'json-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import { constants } from 'zlib';

export class WebpackStack {
  env;
  argv;
  config;

  constructor(env, argv, config) {
    this.env = env;
    this.argv = argv;
    this.config = config;
  }

  static create(env, argv, options = {}) {
    return new this(env, argv, {
      ...options,
    });
  }

  clone(config) {
    return new this.constructor(this.env, this.argv, config);
  }

  base(options = {}) {
    return this.clone(this.env, this.argv, {
      ...this.config,
      target: ['web', 'es2020'],
      output: {
        filename: 'immutable.[contenthash].js',
        chunkFilename: 'immutable.[contenthash].js',
        assetModuleFilename: 'immutable.[contenthash][ext][query][fragment]',
        clean: true,
        publicPath: 'auto',
      },
      devtool: this.isProduction ? 'hidden-nosources-source-map' : 'eval-source-map',
      devServer: {
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true,
      },
      experiments: {
        futureDefaults: true,
      },
      resolve: {
        extensions: ['.tsx', '.mts', '.ts', '.cts', '.jsx', '.mjs', '.js', '.cjs'],
      },
      plugins: [],
      module: {
        rules: [
          {
            test: /\.(tsx|mts|ts|cts|jsx|mjs|js|cjs)$/i,
            resourceQuery: { not: [/raw/] },
            use: [
              {
                loader: 'babel-loader',
              },
            ],
          },
          {
            test: /\.(sass|scss|css)$/i,
            resourceQuery: { not: [/raw/] },
            type: 'css/auto',
            use: [
              {
                loader: 'postcss-loader',
              },
              {
                loader: 'sass-loader',
              },
            ],
          },
          {
            test: /\.(html|php)$/i,
            resourceQuery: { not: [/raw/] },
            use: [
              {
                loader: 'html-loader',
              },
            ],
          },
          {
            resourceQuery: /source/,
            type: 'asset/source',
          },
          {
            resourceQuery: /resource/,
            type: 'asset/resource',
          },
          {
            resourceQuery: /inline/,
            type: 'asset/inline',
          },
          {
            resourceQuery: /asset/,
            type: 'asset',
          },
        ],
      },
      optimization: {
        removeAvailableModules: this.isProduction,
        minimizer: [
          new TerserPlugin({
            extractComments: false,
            terserOptions: {
              ecma: 2020,
              compress: {
                drop_console: true,
                drop_debugger: true,
                passes: 5,
              },
              format: {
                comments: false,
              },
            },
          }),
          new CssMinimizerPlugin(),
          new HtmlMinimizerPlugin(),
          new JsonMinimizerPlugin(),
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.sharpMinify,
              options: {
                encodeOptions: {
                  jpeg: {
                    quality: 100,
                  },
                  webp: {
                    lossless: true,
                    effort: 6,
                  },
                  avif: {
                    lossless: true,
                    effort: 9,
                  },
                  heif: {
                    lossless: true,
                    effort: 9,
                  },
                  jxl: {
                    lossless: true,
                    effort: 9,
                  },
                  jp2: {
                    lossless: true,
                  },
                  tiff: {
                    quality: 100,
                  },
                  png: {
                    effort: 10,
                  },
                  gif: {
                    effort: 10,
                  },
                },
              },
            },
            generator: [
              {
                preset: 'avif',
                type: 'import',
                implementation: ImageMinimizerPlugin.sharpGenerate,
                options: {
                  encodeOptions: {
                    avif: {
                      quality: 60,
                      lossless: false,
                      effort: 9,
                      chromaSubsampling: '4:2:0',
                      bitdepth: 8,
                    },
                  },
                },
              },
              {
                preset: 'webp',
                type: 'import',
                implementation: ImageMinimizerPlugin.sharpGenerate,
                options: {
                  encodeOptions: {
                    webp: {
                      quality: 90,
                      alphaQuality: 100,
                      lossless: false,
                      nearLossless: false,
                      smartSubsample: true,
                      effort: 6,
                      minSize: false,
                      mixed: false,
                      preset: 'default',
                    },
                  },
                },
              },
              {
                preset: 'png',
                type: 'import',
                implementation: ImageMinimizerPlugin.sharpGenerate,
                options: {
                  encodeOptions: {
                    png: {
                      progressive: true,
                      compressionLevel: 9,
                      adaptiveFiltering: true,
                      quality: 100,
                      effort: 10,
                      palette: true,
                      colours: 256,
                      colors: 256,
                      dither: 0.8,
                    },
                  },
                },
              },
              {
                preset: 'jpg',
                type: 'import',
                implementation: ImageMinimizerPlugin.sharpGenerate,
                options: {
                  encodeOptions: {
                    jpg: {
                      quality: 80,
                      progressive: true,
                      chromaSubsampling: '4:4:4',
                      trellisQuantisation: true,
                      overshootDeringing: true,
                      optimiseScans: true,
                      optimizeScans: true,
                      optimiseCoding: true,
                      optimizeCoding: true,
                      quantisationTable: 2,
                      quantizationTable: 2,
                      mozjpeg: true,
                    },
                  },
                },
              },
            ],
          }),
        ],
      },
      ...options,
    });
  }

  copy(options = {}) {
    return this.clone(this.env, this.argv, {
      ...this.config,
      plugins: [
        ...this.config.plugins,
        new CopyPlugin({
          patterns: [
            {
              from: './public',
              to: '.',
            },
          ],
          ...options,
        }),
      ],
    });
  }

  html(options = {}) {
    return this.clone(this.env, this.argv, {
      ...this.config,
      plugins: [
        ...this.config.plugins,
        new HtmlWebpackPlugin({
          template: './node_modules/@premierstacks/webpack-stack/assets/index.html',
          filename: 'index.html',
          xhtml: true,
          inject: true,
          chunks: 'all',
          publicPath: '/',
          ...options,
        }),
      ],
    });
  }

  gzip(options = {}) {
    return this.clone(this.env, this.argv, {
      ...this.config,
      plugins: [
        ...this.config.plugins,
        new CompressionPlugin({
          algorithm: 'gzip',
          compressionOptions: { level: 9 },
          minRatio: Infinity,
          filename: '[path][base].gz[query][fragment]',
          ...options,
        }),
      ],
    });
  }

  brotli(options = {}) {
    return this.clone(this.env, this.argv, {
      ...this.config,
      plugins: [
        ...this.config.plugins,
        new CompressionPlugin({
          algorithm: 'brotliCompress',
          compressionOptions: { [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MAX_QUALITY },
          minRatio: Infinity,
          filename: '[path][base].br[query][fragment]',
          ...options,
        }),
      ],
    });
  }

  environment(options = {
    WEBPACK_MODE: this.mode,
    APP_NAME: this.appName,
    APP_VERSION: this.appVersion,
    APP_ENV: this.appEnv,
  }) {
    return this.clone(this.env, this.argv, {
      ...this.config,
      plugins: [
        ...this.config.plugins,
        new webpack.EnvironmentPlugin({
          ...options,
        }),
      ],
    });
  }

  define(options = {
    global: 'globalThis',
  }) {
    return this.clone(this.env, this.argv, {
      ...this.config,
      plugins: [
        ...this.config.plugins,
        new webpack.DefinePlugin({
          ...options,
        }),
      ],
    });
  }

  entry(options = {}) {
    return this.clone(this.env, this.argv, {
      ...this.config,
      entry: {
        ...this.config.entry,
        ...options,
      },
    });
  }

  merge(callable) {
    return this.clone(this.env, this.argv, callable(this.env, this.argv, this.config));
  }

  build() {
    return { ...this.config };
  }

  get isProduction() {
    return this.mode === 'production';
  }

  get isDevelopment() {
    return this.mode === 'development';
  }

  get isBuild() {
    return this.env.WEBPACK_BUILD ?? false;
  }

  get isWatched() {
    return this.env.WEBPACK_WATCH ?? false;
  }

  get isServed() {
    return this.env.WEBPACK_SERVE ?? false;
  }

  get mode() {
    return this.argv.mode ?? 'production';
  }

  get nodeEnv() {
    return this.argv.nodeEnv ?? 'production';
  }

  get appEnv() {
    return this.env.APP_ENV ?? this.argv.appEnv ?? process.env.APP_ENV ?? 'production';
  }

  get appVersion() {
    return this.env.APP_VERSION ?? this.argv.appVersion ?? process.env.APP_VERSION ?? process.env.npm_package_version ?? execSync('git rev-parse HEAD').toString().trim(); // eslint-disable-line sonarjs/no-os-command-from-path
  }

  get appName() {
    return this.env.APP_NAME ?? this.argv.appName ?? process.env.APP_NAME ?? process.env.npm_package_name ?? 'webpack-stack';
  }
}
