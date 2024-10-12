import { nodeTypescriptLibrary } from '@premierstacks/webpack-stack';

export default function (env, argv) {
  const config = nodeTypescriptLibrary(env, argv);

  config.entry = { index: ['./src/index.ts'] };

  return config;
}
