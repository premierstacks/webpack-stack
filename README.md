# [Webpack Stack](https://github.com/premierstacks/webpack-stack) by [Tomáš Chochola](https://github.com/tomchochola)

A premium, preconfigured Webpack stack designed to streamline your web development and build processes. It includes a comprehensive suite of features, ensuring efficient and high-performance web applications for both Node.js and browser environments.

## 💡 Idea Behind Premierstacks

Premierstacks is a comprehensive solution designed to cover both the development environment and the runtime provisioning/release process to production servers.

It includes everything from basic project structures to configurations for unit tests, static analysis, linters, automatic code fixers, and compilation or transpilation. Premierstacks ensures that your entire workflow, from development to production deployment, operates smoothly.

With a single license, you gain access to multiple libraries and guides that allow you to focus on business logic while Premierstacks handles both development and runtime environments.

This software is proprietary and designed for serious developers who value precision and professionalism. Ensure compliance by securing your license today.

## ⚡ Why Choose This Solution?

- **Premier Quality**

  Crafted with cutting-edge Webpack features to optimize build processes for both Node.js and browser environments.

- **Expertly Crafted**

  Built for rapid integration, enabling smooth transitions from development to production environments.

- **Production-Ready**

  Fully tested in real-world applications to ensure optimized and reliable builds.

- **Efficient Setup**

  Simplifies the Webpack configuration, reducing setup time while maintaining high performance.

- **Regular Updates**

  Stay up to date with the latest Webpack enhancements and plugins.

## 🛡️ License & Usage

**Copyright © 2024+ Tomáš Chochola <chocholatom1997@gmail.com> - All Rights Reserved**

[![License](https://img.shields.io/badge/License-©_Proprietary-blue.svg)](LICENSE.md)

This software is proprietary property of Tomáš Chochola and protected by copyright laws.<br />
A valid license is required for any use or manipulation of the software or source code.<br />
The full license terms are detailed in the LICENSE.md file within the source code repository.

One license grants you access to all Premierstacks products, ensuring a unified solution for your development and production needs.

**Purchase a license here**: [GitHub Sponsors](https://github.com/sponsors/tomchochola)

**See full terms in**: [LICENSE.md](LICENSE.md)

## 📦 Module exports

Here are the available module exports and their use cases:

```js
import * as m from '@premierstacks/webpack-stack';

// Webpack configuration for React TypeScript applications
browserTypescriptReactApp(env, argv);

// Webpack configuration for React TypeScript libraries
browserTypescriptReactLibrary(env, argv);

// Webpack configuration for browser-based TypeScript applications
browserTypescriptApp(env, argv);

// Webpack configuration for browser-based TypeScript libraries
browserTypescriptLibrary(env, argv);

// Webpack configuration for Node.js TypeScript applications
nodeTypescriptApp(env, argv);

// Webpack configuration for Node.js TypeScript libraries
nodeTypescriptLibrary(env, argv);

// Webpack configuration for Node.js TypeScript applications with React
nodeTypescriptReactApp(env, argv);

// Webpack configuration for Node.js TypeScript libraries with React
nodeTypescriptReactLibrary(env, argv);

// Utilities for chunk splitting
chunks(env, argv, config);

// Utility for copying static assets
copy(env, argv, config, options);

// Environment utilities for Webpack
getWebpackMode(env, argv);

// Utility for generating and managing HTML templates
html(env, argv, config, options);

// Environment utilities for Webpack
isWebpackBuild(env, argv);

// Environment utilities for Webpack
isWebpackDevelopment(env, argv);

// Environment utilities for Webpack
isWebpackProduction(env, argv);

// Environment utilities for Webpack
isWebpackServe(env, argv);

// Environment utilities for Webpack
isWebpackWatch(env, argv);
```

## 🧩 Templates

Explore the predefined templates for various configurations in the `/templates` directory. These templates provide quick-start setups for different environments.

- **[/templates/browser_typescript_react_app.config.js](/templates/browser_typescript_react_app.config.js)**

  Webpack configuration for React TypeScript applications.

- **[/templates/browser_typescript_react_library.config.js](/templates/browser_typescript_react_library.config.js)**

  Webpack configuration for React TypeScript libraries.

- **[/templates/browser_typescript_app.config.js](/templates/browser_typescript_app.config.js)**

  Webpack configuration for browser-based TypeScript applications.

- **[/templates/browser_typescript_library.config.js](/templates/browser_typescript_library.config.js)**

  Webpack configuration for browser-based TypeScript libraries.

- **[/templates/node_typescript_react_app.config.js](/templates/node_typescript_react_app.config.js)**

  Webpack configuration for Node.js TypeScript applications with React.

- **[/templates/node_typescript_react_library.config.js](/templates/node_typescript_react_library.config.js)**

  Webpack configuration for Node.js TypeScript libraries with React.

- **[/templates/node_typescript_app.config.js](/templates/node_typescript_app.config.js)**

  Webpack configuration for Node.js TypeScript applications.

- **[/templates/node_typescript_library.config.js](/templates/node_typescript_library.config.js)**

  Webpack configuration for Node.js TypeScript libraries.

## 🚀 Getting Started

1️⃣ **Review the documentation and license**

Ensure this package fits your needs and that you agree with the terms.

2️⃣ **Purchase a license**

Obtain a valid license through [GitHub Sponsors](https://github.com/sponsors/tomchochola).

3️⃣ **Install the package**

Install using npm:

```bash
npm install --save-dev github:premierstacks/webpack-stack
```

4️⃣ **Select a template**

Choose one of the predefined configuration templates from the `/templates` directory that best suits your project’s needs. Use the `cp` command to copy it into your project as `webpack.config.js`:

```bash
cp ./node_modules/@premierstacks/webpack-stack/templates/browser_typescript_react_app.config.js ./webpack.config.js
# or
cp ./node_modules/@premierstacks/webpack-stack/templates/browser_typescript_react_library.config.js ./webpack.config.js
# or
cp ./node_modules/@premierstacks/webpack-stack/templates/browser_typescript_app.config.js ./webpack.config.js
# or
cp ./node_modules/@premierstacks/webpack-stack/templates/browser_typescript_library.config.js ./webpack.config.js
# or
cp ./node_modules/@premierstacks/webpack-stack/templates/node_typescript_react_app.config.js ./webpack.config.js
# or
cp ./node_modules/@premierstacks/webpack-stack/templates/node_typescript_react_library.config.js ./webpack.config.js
# or
cp ./node_modules/@premierstacks/webpack-stack/templates/node_typescript_app.config.js ./webpack.config.js
# or
cp ./node_modules/@premierstacks/webpack-stack/templates/node_typescript_library.config.js ./webpack.config.js
```

5️⃣ **CLI**

Execute commands:

```bash
# Start the development server
./node_modules/.bin/webpack-cli serve --mode=development --node-env=development

# Build the project for development
./node_modules/.bin/webpack-cli build --mode=development --node-env=development

# Build the project for production
./node_modules/.bin/webpack-cli build --mode=production --node-env=production
```

## 👤 The Author: Tomáš Chochola

Tomáš Chochola is a leading software developer known for delivering precision-crafted, enterprise-grade solutions. With deep expertise in multiple cutting-edge technologies, Tomáš focuses on ensuring top-tier code quality and efficiency for every project.

**Email**: <chocholatom1997@gmail.com><br />
**Premierstacks website**: [https://premierstacks.com](https://premierstacks.com)<br />
**Personal GitHub**: [https://github.com/tomchochola](https://github.com/tomchochola)<br />
**Premierstacks GitHub**: [https://github.com/premierstacks](https://github.com/premierstacks)<br />
**GitHub Sponsors**: [https://github.com/sponsors/tomchochola](https://github.com/sponsors/tomchochola)

His areas of specialization include:

- DevOps and AWS
- PHP and Laravel
- Secure coding practices
- Code style and best practices
- Helper functions and libraries
- TypeScript, React, and Webpack
- Reusable templates and configuration stacks
- Development on Windows 11 and Ubuntu 22/24 (WSL2)
- ESLint, Prettier, PHP CS Fixer, PostCSS, and Stylelint

## 💼 Hire Me

Whether you need short-term code assistance, in-depth analysis, or help integrating premium packages, I'm available for collaboration. Let's take your project to the next level.

You can also support my work by becoming a sponsor through [GitHub Sponsors](https://github.com/sponsors/tomchochola).

If you're interested in hiring me for any of the above or for solving IT issues, feel free to reach out. I'm open to collaboration, whether it's for new packages, ongoing projects, or quick IT fixes.

## 🌳 Project Structure (Tree)

Below is an example of the project structure you will receive upon purchasing the Webpack Stack. This allows you to see what’s included and know exactly what you are paying for:

```sh
.
├── AUTHORS.md
├── LICENSE.md
├── Makefile
├── README.md
├── assets
│   ├── favicon.ico
│   └── index.html
├── eslint.config.js
├── package.json
├── prettier.config.js
├── src
│   ├── configs
│   │   ├── browser_typescript_app.js
│   │   ├── browser_typescript_library.js
│   │   ├── browser_typescript_react_app.js
│   │   ├── browser_typescript_react_library.js
│   │   ├── node_typescript_app.js
│   │   ├── node_typescript_library.js
│   │   ├── node_typescript_react_app.js
│   │   └── node_typescript_react_library.js
│   ├── index.js
│   └── utils
│       ├── chunks.js
│       ├── copy.js
│       ├── env.js
│       └── html.js
└── templates
    ├── browser_typescript_app.config.js
    ├── browser_typescript_library.config.js
    ├── browser_typescript_react_app.config.js
    ├── browser_typescript_react_library.config.js
    ├── node_typescript_app.config.js
    ├── node_typescript_library.config.js
    ├── node_typescript_react_app.config.js
    └── node_typescript_react_library.config.js

5 directories, 30 files
```
