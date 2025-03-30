/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2025 Tomáš Chochola <chocholatom1997@gmail.com>
 *
 * @license Apache-2.0
 *
 * @see {@link http://www.apache.org/licenses/LICENSE-2.0} License
 * @see {@link https://github.com/tomchochola} GitHub Personal
 * @see {@link https://github.com/premierstacks} GitHub Organization
 * @see {@link https://github.com/sponsors/tomchochola} GitHub Sponsors
 */

import CompressionPlugin from 'compression-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlMinimizerPlugin from 'html-minimizer-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import JsonMinimizerPlugin from 'json-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { constants } from 'zlib';
import { isWebpackModeProduction } from './env.js';

export function createWebpackConfigBrowserTypescriptReactLibrary(env, argv) {
  const production = isWebpackModeProduction(env, argv);

  return {
    target: ['web', 'es2020'],
    output: {
      filename: 'immutable.[contenthash].js',
      assetModuleFilename: 'immutable.[contenthash][ext][query][fragment]',
      clean: true,
      publicPath: 'auto',
      library: {
        type: 'commonjs2',
      },
    },
    devtool: production ? false : 'eval-source-map',
    devServer: {
      host: '0.0.0.0',
      port: 3000,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.tsx', '.mts', '.ts', '.cts', '.jsx', '.mjs', '.js', '.cjs'],
    },
    plugins: production
      ? [
          new MiniCssExtractPlugin({
            filename: 'immutable.[contenthash].css',
            chunkFilename: 'immutable.[contenthash].css',
          }),
          new CompressionPlugin({
            algorithm: 'gzip',
            compressionOptions: { level: 9 },
            minRatio: Infinity,
            filename: '[path][base].gz[query][fragment]',
          }),
          new CompressionPlugin({
            algorithm: 'brotliCompress',
            compressionOptions: { [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MAX_QUALITY },
            minRatio: Infinity,
            filename: '[path][base].br[query][fragment]',
          }),
        ]
      : [],
    module: {
      rules: [
        {
          test: /\.(tsx|mts|ts|cts|jsx|mjs|js|cjs)$/i,
          resourceQuery: { not: [/raw/] },
          use: [
            {
              loader: 'ts-loader',
              options: {
                onlyCompileBundledFiles: true,
                allowTsInNodeModules: true,
                transpileOnly: true,
                compilerOptions: {
                  jsx: production ? 'react-jsx' : 'react-jsxdev',
                },
              },
            },
          ],
        },
        {
          test: /\.(sass|scss|css)$/i,
          resourceQuery: { not: [/raw/] },
          use: [
            {
              loader: production ? MiniCssExtractPlugin.loader : 'style-loader',
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
      removeAvailableModules: production,
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
  };
}
