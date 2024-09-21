import { nodeTypescriptReactApp } from '@premierstacks/webpack-stack';

export default function (env, argv) {
  const config = nodeTypescriptReactApp(env, argv);

  return config;
}
