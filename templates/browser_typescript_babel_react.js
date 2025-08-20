import { WebpackStack } from '@premierstacks/webpack-stack';

// eslint-disable-next-line no-restricted-exports
export default function (env, argv) {
  let stack = WebpackStack.create(env, argv)
    .base()
    .entry({
      index: ['./src/index.ts'],
    })
    .environment()
    .define()
    .html()
    .copy();

  if (stack.isProduction) {
    stack = stack.gzip().brotli();
  }

  return stack.build();
}
