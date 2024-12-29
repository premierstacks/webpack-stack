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

import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlMinimizerPlugin from 'html-minimizer-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import JsonMinimizerPlugin from 'json-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { isWebpackProduction } from '../utils/env.js';

export function browserTypescriptReactApp(env, argv) {
  return {
    target: ['web', 'es2020'],
    entry: { index: ['./src/index.tsx', './src/index.scss'] },
    output: {
      filename: '[name].[contenthash].js',
      clean: true,
      publicPath: '/',
      assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
    },
    devtool: isWebpackProduction(env, argv) ? 'hidden-nosources-source-map' : 'eval-source-map',
    devServer: {
      open: true,
      host: '0.0.0.0',
      port: 3000,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.mjs', '.js', '.cjs'],
    },
    experiments: {
      futureDefaults: true,
    },
    plugins: [],
    module: {
      rules: [
        {
          test: /\.(tsx|ts|jsx|mjs|js|cjs)$/i,
          resourceQuery: { not: [/raw/] },
          exclude: /[\\/]node_modules[\\/]/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                onlyCompileBundledFiles: true,
                compilerOptions: {
                  declaration: false,
                  declarationMap: false,
                  sourceMap: true,
                  module: 'ES2022',
                  moduleResolution: 'Bundler',
                  allowJs: true,
                  allowSyntheticDefaultImports: true,
                  esModuleInterop: true,
                  jsx: isWebpackProduction(env, argv) ? 'react-jsx' : 'react-jsxdev',
                  resolveJsonModule: true,
                  isolatedModules: true,
                  verbatimModuleSyntax: true,
                  allowArbitraryExtensions: true,
                  allowImportingTsExtensions: true,
                },
              },
            },
          ],
        },
        {
          test: /\.(tsx|ts|jsx)$/i,
          resourceQuery: { not: [/raw/] },
          include: /[\\/]node_modules[\\/]/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                onlyCompileBundledFiles: true,
                compilerOptions: {
                  declaration: false,
                  declarationMap: false,
                  sourceMap: false,
                  module: 'ES2022',
                  moduleResolution: 'Bundler',
                  allowJs: true,
                  allowSyntheticDefaultImports: true,
                  esModuleInterop: true,
                  jsx: isWebpackProduction(env, argv) ? 'react-jsx' : 'react-jsxdev',
                  resolveJsonModule: true,
                  isolatedModules: true,
                  verbatimModuleSyntax: true,
                  allowArbitraryExtensions: true,
                  allowImportingTsExtensions: true,
                },
              },
            },
          ],
        },
        {
          test: /\.(scss|css)$/i,
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
          test: /\.(svg)$/i,
          resourceQuery: /svgr/,
          use: [
            {
              loader: '@svgr/webpack',
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
      runtimeChunk: 'single',
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: 2020,
            toplevel: true,
            module: true,
            compress: {
              drop_console: true,
              drop_debugger: true,
              passes: 5,
              toplevel: true,
              ecma: 2020,
              module: true,
            },
            format: {
              ecma: 2020,
              comments: false,
            },
            mangle: {
              toplevel: true,
              module: true,
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
  };
}
