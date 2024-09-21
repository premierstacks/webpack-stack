import { browserTypescriptReactApp, chunks, html, copy } from '@premierstacks/webpack-stack';

export default function (env, argv) {
  const config = browserTypescriptReactApp(env, argv);

  chunks(env, argv, config);
  html(env, argv, config);
  copy(env, argv, config);

  return config;
}
