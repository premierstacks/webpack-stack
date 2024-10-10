import { browserTypescriptReactLibrary, html, isWebpackServe } from '@premierstacks/webpack-stack';

export default function (env, argv) {
  const config = browserTypescriptReactLibrary(env, argv);

  if (isWebpackServe(env, argv)) {
    html(env, argv, config);
  }

  return config;
}
