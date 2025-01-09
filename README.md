# [Webpack Stack](https://github.com/premierstacks/webpack-stack) by [Tomáš Chochola](https://github.com/tomchochola)

The Webpack Stack offers a collection of ready-to-use configurations for building, bundling, and optimizing JavaScript, TypeScript, and React applications. It provides pre-configured setups designed for both browser and Node.js environments, allowing you to quickly get started with complex Webpack projects without spending time on configuration.

## What is Premierstacks

[GitHub Organization → /premierstacks](https://github.com/premierstacks)

Premierstacks is a premier organization delivering a complete ecosystem of libraries, packages, and templates for full-stack web development. It provides end-to-end solutions for backend systems, APIs, and frontend interfaces built on PHP, Laravel, TypeScript, React, and Material Design 3.

Beyond code, Premierstacks focuses on creating a seamless development experience, offering support tools for planning, architecture, deployment, and long-term project maintenance. Each resource within the ecosystem is crafted with precision, adhering to strict quality standards, and designed to scale effortlessly.

From initial project planning and logical architecture to seamless development workflows and optimized production deployment, Premierstacks delivers tools engineered for excellence across every stage of the software lifecycle.

## Why Premierstacks

Premierstacks exists to solve the recurring challenges of modern software development: inconsistency, poor maintainability, and fragmented tooling. It offers a complete ecosystem of libraries, templates, and supporting tools, designed to streamline workflows, enforce best practices, and ensure long-term reliability.

Every component in Premierstacks is crafted with precision, following strict quality standards. From backend logic to frontend interfaces and infrastructure tooling, the focus remains on delivering scalable, future-proof, and seamless solutions. With Premierstacks, development becomes faster, cleaner, and more consistent—right from the first line of code to final deployment.

## What is Tomchochola

[GitHub Personal → /tomchochola](https://github.com/tomchochola)

The Tomchochola GitHub profile features a range of public and private repositories, including experimental tools, independent projects, and legacy systems. These repositories often represent unique solutions that exist outside the strict quality and structural guidelines of Premierstacks.

Here, you’ll find codebases that may belong to different ecosystems, technologies, or experimental workflows. Some projects serve specific use cases, while others are standalone solutions or serve as proof-of-concept prototypes. This profile is a playground for ideas, tools, and resources that might not fully align with the long-term goals of Premierstacks but still offer value and insight into various aspects of software development.

## About the Creator

Tomáš Chochola is a software architect, technical leader, and creator of the Premierstacks ecosystem. With years of experience in backend and frontend development, cloud infrastructure, and team management, he has established a reputation for delivering scalable, maintainable, and robust software solutions.

His expertise spans backend systems built on PHP and Laravel, frontend interfaces designed with React and Material Design 3, and efficient workflows powered by modern tooling and infrastructure solutions.

### Specializations

**Backend Development:** PHP, Laravel, JSON:API<br />
**Frontend Development:** TypeScript, React, Material Design 3<br />
**Tooling:** ESLint, Prettier, Webpack, PHPStan, PHP CS Fixer, Stylelint<br />

## Support the Creator

**[GitHub Sponsors -> /sponsors/tomchochola](https://github.com/sponsors/tomchochola)**

Premierstacks is now freely available under the Creative Commons BY-ND 4.0 license, offering high-quality tools, libraries, and templates to the developer community. While the ecosystem remains open and accessible, its growth, updates, and ongoing maintenance depend on individual support.

By sponsoring Tomáš Chochola on GitHub Sponsors, you directly contribute to the continued development, improvement, and long-term sustainability of Premierstacks. Every contribution supports the creation of reliable, scalable, and future-proof solutions for developers worldwide.

Your support makes a difference—thank you for being a part of this journey.

## License

**Creative Commons Attribution-NoDerivatives 4.0 International**

**Copyright © 2025, Tomáš Chochola <chocholatom1997@gmail.com>. Some rights reserved.**

This license requires that reusers give credit to the creator. It allows reusers to copy and distribute the material in any medium or format in unadapted form only, even for commercial purposes.

### Creative Commons License for Software?

The Creative Commons BY-ND 4.0 license is perfectly suited to Premierstacks. It offers developers the freedom to integrate the software into their projects while preserving the original author’s vision and ensuring consistency across the ecosystem.

Dynamic linking and object-oriented programming practices, such as inheritance or method overriding, are fully permitted. This enables seamless adaptation of the software in dynamic contexts without violating the license. However, static linking, forks, or modifications that alter the software’s original form are prohibited to maintain its integrity and prevent the creation of fragmented or subpar versions.

By protecting the core quality and unity of Premierstacks, this license ensures that developers can confidently rely on it as a trusted, high-standard solution for their projects.

## Module exports

Here are the available module exports:

```js
import {
  browserTypescriptApp,
  browserTypescriptLibrary,
  browserTypescriptReactApp,
  browserTypescriptReactLibrary,
  copy,
  getWebpackMode,
  html,
  isWebpackBuild,
  isWebpackDevelopment,
  isWebpackProduction,
  isWebpackServe,
  isWebpackWatch,
  nodeTypescriptApp,
  nodeTypescriptLibrary,
  nodeTypescriptReactApp,
  nodeTypescriptReactLibrary,
  reactChunks,
  reactExternals,
  vendorChunks,
} from '@premierstacks/eslint-stack';
```

## Templates

Explore the predefined templates for various configurations in the [/templates](/templates) directory. These templates provide quick-start setups for different environments.

**[/templates/browser_typescript_react_app.template](/templates/browser_typescript_react_app.template)**<br />
**[/templates/browser_typescript_react_library.template](/templates/browser_typescript_react_library.template)**<br />
**[/templates/browser_typescript_app.template](/templates/browser_typescript_app.template)**<br />
**[/templates/browser_typescript_library.template](/templates/browser_typescript_library.template)**<br />
**[/templates/node_typescript_react_app.template](/templates/node_typescript_react_app.template)**<br />
**[/templates/node_typescript_react_library.template](/templates/node_typescript_react_library.template)**<br />
**[/templates/node_typescript_app.template](/templates/node_typescript_app.template)**<br />
**[/templates/node_typescript_library.template](/templates/node_typescript_library.template)**<br />

## Getting Started

**1. Review the documentation and license**

Ensure this package fits your needs and that you agree with the terms.

**2. Install the package**

Install using npm:

```bash
npm install --save-dev github:premierstacks/webpack-stack
```

**3. Select a template**

Choose one of the predefined configuration templates from the [/templates](/templates) directory that best suits your project’s needs.

Use the `cp` command to copy it into your project as `/webpack.config.js`:

```bash
cp ./node_modules/@premierstacks/webpack-stack/templates/browser_typescript_react_app.template./webpack.config.js
# or
cp ./node_modules/@premierstacks/webpack-stack/templates/browser_typescript_react_library.template./webpack.config.js
# or
cp ./node_modules/@premierstacks/webpack-stack/templates/browser_typescript_app.template./webpack.config.js
# or
cp ./node_modules/@premierstacks/webpack-stack/templates/browser_typescript_library.template./webpack.config.js
# or
cp ./node_modules/@premierstacks/webpack-stack/templates/node_typescript_react_app.template./webpack.config.js
# or
cp ./node_modules/@premierstacks/webpack-stack/templates/node_typescript_react_library.template./webpack.config.js
# or
cp ./node_modules/@premierstacks/webpack-stack/templates/node_typescript_app.template./webpack.config.js
# or
cp ./node_modules/@premierstacks/webpack-stack/templates/node_typescript_library.template./webpack.config.js
```

**4. CLI**

Execute commands:

```bash
# start the development server
./node_modules/.bin/webpack-cli serve --mode=development --node-env=development

# build the project for development
./node_modules/.bin/webpack-cli build --mode=development --node-env=development

# build the project for production
./node_modules/.bin/webpack-cli build --mode=production --node-env=production
```

## Contact

**📧 Email: <chocholatom1997@gmail.com>**<br />
**👨 GitHub Personal: [https://github.com/tomchochola](https://github.com/tomchochola)**<br />
**🏢 GitHub Organization: [https://github.com/premierstacks](https://github.com/premierstacks)**<br />
**💰 GitHub Sponsors: [https://github.com/sponsors/tomchochola](https://github.com/sponsors/tomchochola)**<br />

## Tree

The following is a breakdown of the folder and file structure within this repository. It provides an overview of how the code is organized and where to find key components.

```bash
.
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .prettierignore
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
│       ├── externals.js
│       └── html.js
└── templates
    ├── browser_typescript_app.template
    ├── browser_typescript_library.template
    ├── browser_typescript_react_app.template
    ├── browser_typescript_react_library.template
    ├── node_typescript_app.template
    ├── node_typescript_library.template
    ├── node_typescript_react_app.template
    └── node_typescript_react_library.template

5 directories, 35 files
```
