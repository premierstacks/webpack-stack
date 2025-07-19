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

import JsonMinimizerPlugin from 'json-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { isWebpackModeProduction } from './env.js';

export function createWebpackConfigNodeTypescriptApi(env, argv) {
  const production = isWebpackModeProduction(env, argv);

  return {
    target: ['node23', 'es2024'],
    output: {
      filename: 'bundle.cjs',
      clean: true,
    },
    devtool: production ? 'hidden-nosources-source-map' : 'eval-source-map',
    resolve: {
      extensions: ['.mts', '.ts', '.cts', '.mjs', '.js', '.cjs'],
    },
    module: {
      rules: [
        {
          test: /\.(mts|ts|cts|mjs|js|cjs)$/i,
          resourceQuery: { not: [/raw/] },
          use: [
            {
              loader: 'ts-loader',
              options: {
                onlyCompileBundledFiles: true,
                allowTsInNodeModules: true,
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },
    optimization: {
      removeAvailableModules: production,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            ecma: 2024,
            compress: {
              drop_console: false,
              drop_debugger: true,
              passes: 5,
            },
            format: {
              comments: false,
            },
          },
        }),
        new JsonMinimizerPlugin(),
      ],
    },
  };
}
