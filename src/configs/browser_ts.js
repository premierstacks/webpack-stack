/**
 * Copyright © 2024+ Tomáš Chochola <chocholatom1997@gmail.com> - All Rights Reserved
 *
 * This software is the exclusive property of Tomáš Chochola, protected by copyright laws.
 * Although the source code may be accessible, it is not free for use without a valid license.
 * A valid license, obtainable through proper channels, is required for any software use.
 * For licensing or inquiries, please contact Tomáš Chochola or refer to the GitHub Sponsors page.
 *
 * The full license terms are detailed in the LICENSE.md file within the source code repository.
 * The terms are subject to changes. Users are encouraged to review them periodically.
 *
 * Tomáš Chochola: The Creator, Proprietor & Project Visionary
 * - Email: chocholatom1997@gmail.com
 * - GitHub: https://github.com/tomchochola
 * - Sponsor & License: https://github.com/sponsors/tomchochola
 *
 * Premierstacks: The Organization
 * - GitHub: https://github.com/premierstacks
 */

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlMinimizerPlugin from 'html-minimizer-webpack-plugin';
import JsonMinimizerPlugin from 'json-minimizer-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';

export default function (env, argv, entry = ['./src/index.ts', './src/index.scss']) {
  const prod = argv.mode === 'production';

  const config = {
    target: ['web', 'es2015'],
    entry: entry,
    output: {
      filename: '[name].[contenthash].js',
      clean: true,
      publicPath: '/',
      assetModuleFilename: '[name].[hash][ext][query]',
    },
    devtool: prod ? 'source-map' : 'eval-source-map',
    devServer: {
      open: true,
      host: '0.0.0.0',
      port: 8000,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.ts', '.mjs', '.js', '.cjs'],
    },
    plugins: [],
    module: {
      rules: [
        {
          test: /\.(ts|mjs|js|cjs)$/i,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /\.(scss|css)$/i,
          use: [
            {
              loader: prod ? MiniCssExtractPlugin.loader : 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(eot|svg|ttf|otf|woff|woff2|png|jpg|jpeg|gif|bmp|webp)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(html)$/i,
          use: [
            {
              loader: 'html-loader',
            },
          ],
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

  if (prod) {
    config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }));
  }

  return config;
}
