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
import { isWebpackProduction } from '../utils/env.js';

export function nodeTypescriptReactLibrary(env, argv) {
  return {
    target: ['browserslist'],
    entry: { index: ['./src/index.ts'] },
    output: {
      filename: '[name].cjs',
      clean: true,
      publicPath: 'auto',
      assetModuleFilename: 'assets/[name][ext][query]',
      library: {
        type: 'commonjs2',
      },
    },
    devtool: isWebpackProduction(env, argv) ? false : 'eval-source-map',
    devServer: {
      open: true,
      host: '0.0.0.0',
      port: 8000,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.mjs', '.js', '.cjs'],
    },
    experiments: {
      futureDefaults: true,
    },
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
                  declaration: true,
                  declarationMap: true,
                  sourceMap: true,
                  module: 'ESNext',
                  moduleResolution: 'Bundler',
                },
              },
            },
          ],
        },
        {
          test: /\.(tsx|ts|jsx|mjs|js|cjs)$/i,
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
                  module: 'ESNext',
                  moduleResolution: 'Bundler',
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
      minimizer: [
        '...',
        new CssMinimizerPlugin(),
        new HtmlMinimizerPlugin(),
        new JsonMinimizerPlugin(),
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.sharpMinify,
          },
        }),
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.svgoMinify,
            options: {
              encodeOptions: {
                multipass: true,
                plugins: ['preset-default'],
              },
            },
          },
        }),
      ],
    },
  };
}
