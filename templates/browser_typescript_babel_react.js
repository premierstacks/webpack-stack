import { WebpackStack } from '@premierstacks/webpack-stack';

// eslint-disable-next-line no-restricted-exports
export default function (env, argv) {
  return WebpackStack.preset(env, argv, {
    brotli: true,
    gzip: true,
    environment: true,
    define: true,
  }).build();
}
