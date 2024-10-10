import { browserTypescriptLibrary, html, isWebpackServe } from '@premierstacks/webpack-stack';

export default function (env, argv) {
  const config = browserTypescriptLibrary(env, argv);

  if (isWebpackServe(env, argv)) {
    html(env, argv, config);
  }

  return config;
}
