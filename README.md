# [Webpack Stack](https://github.com/premierstacks/webpack-stack) by [Tomáš Chochola](https://github.com/tomchochola)

✨ _**Clone and Win!**_

The Webpack Stack offers a collection of ready-to-use configurations for building, bundling, and optimizing JavaScript, TypeScript, and React applications. It provides pre-configured setups designed for both browser and Node.js environments, allowing you to quickly get started with complex Webpack projects without spending time on configuration.

## What is Webpack Stack?

The Webpack Stack is part of the Premierstacks collection and serves as a comprehensive solution for managing Webpack configurations across different project types. It offers a variety of pre-configured templates tailored to specific scenarios, such as browser-based applications, React libraries, and Node.js server-side projects. Each template is designed to simplify complex build processes by integrating advanced features like chunking, module federation, and asset optimization out of the box.

The stack provides a set of helper functions and utilities, allowing you to effortlessly integrate Webpack into existing projects or build new ones from scratch. Whether you're working on a frontend application or a backend library, the Webpack Stack abstracts away the complexity of configuring loaders, plugins, and optimizers, giving you a solid foundation for any type of project.

With the Webpack Stack, you can quickly set up your project’s development and production builds, minimize assets like CSS and JavaScript, and manage both static and dynamic imports. It is designed to be flexible and extendable, ensuring compatibility with various use cases and making it easy to enforce best practices across all your Webpack-based projects.

## What is Tomchochola

[https://github.com/tomchochola](https://github.com/tomchochola)

This is my personal GitHub profile, where you’ll find public documentation and sample repositories for proprietary packages and templates from Premierstacks. These public repositories are designed to give you an overview of the best practices and high-quality code I follow in all my projects.

## What is Premierstacks

[https://github.com/premierstacks](https://github.com/premierstacks)

Premierstacks is a collection of exclusive, proprietary stacks and templates for PHP, JavaScript, TypeScript, React, and Laravel. It was created to address the common pain points developers face with many open-source projects—quality, consistency, and maintainability. With Premierstacks, you get high-quality tools built with strict attention to detail, designed to help you build and maintain better projects, faster.

## Why Premierstacks?

I created Premierstacks because I wasn’t satisfied with the quality of many open-source projects. Maintaining high-quality code and ensuring long-term reliability is challenging when you’re not earning from the product. When you pay for something, it means the creator truly cares about its success and is committed to delivering the best possible outcome.

Like Apple’s approach with their closed ecosystem, I believe that true excellence can only be achieved when every detail is under your control. That’s why Premierstacks is proprietary software—it's not just about providing solutions; it’s about ensuring those solutions meet the highest standards.

### Why You Should Choose Premierstacks

**🚀 Unmatched Quality**

Our solutions adhere to the highest standards, ensuring clean and maintainable code.

**⚙️ No Setup Hassles**

Pre-configured environments let you start coding immediately—no more complex setups.

**📦 Reuse Across Projects**

Each library and template is built to be reusable, reducing long-term maintenance.

**🔒 Exclusive Resources**

Premierstacks offers tools you won’t find in typical open-source collections.

**🛠️ Always Up-to-Date**

Receive continuous updates and new features, keeping your projects current.

**💪 Expert Creators**

Developed by experienced professionals dedicated to quality and excellence.

## License

**© 2024–Present Tomáš Chochola <chocholatom1997@gmail.com>. All rights reserved.**

This software is proprietary and licensed under specific terms set by its owner.<br />
Any form of access, use, or distribution requires a valid and active license.<br />
For full licensing terms, refer to the LICENSE.md file accompanying this software.<br />

**Purchase a license here: [Github Sponsors](https://github.com/sponsors/tomchochola)**

**See full terms here: [/LICENSE.md](/LICENSE.md)**

## Module exports

Here are the available module exports:

```js
import {
  browserTypescriptReactApp,
  browserTypescriptReactLibrary,
  browserTypescriptApp,
  browserTypescriptLibrary,
  nodeTypescriptApp,
  nodeTypescriptLibrary,
  nodeTypescriptReactApp,
  nodeTypescriptReactLibrary,
  reactChunks,
  vendorChunks,
  copy,
  getWebpackMode,
  html,
  isWebpackBuild,
  isWebpackDevelopment,
  isWebpackProduction,
  isWebpackServe,
  isWebpackWatch,
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

**2. Obtain a license**

**Purchase a license here: [Github Sponsors](https://github.com/sponsors/tomchochola)**

**3. Install the package**

Install using npm:

```bash
npm install --save-dev github:premierstacks/webpack-stack
```

**4. Select a template**

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

**5. CLI**

Execute commands:

```bash
# start the development server
./node_modules/.bin/webpack-cli serve --mode=development --node-env=development

# build the project for development
./node_modules/.bin/webpack-cli build --mode=development --node-env=development

# build the project for production
./node_modules/.bin/webpack-cli build --mode=production --node-env=production
```

**4. See the samples**

Explore the samples in the [/samples](/samples) directory to see how to use the package in various scenarios.

**5. Use the package**

Start using the package in your project.

## About the Creator

I'm Tomáš Chochola, a software developer dedicated to creating exclusive, enterprise-grade software solutions. I specialize in building packages and templates for PHP, JavaScript, and TypeScript, tailored to streamline development workflows, enforce best practices, and save you time.

My mission is to develop reusable solutions that enhance code quality, boost productivity, and ensure that projects remain maintainable and scalable over the long term.

### Specializations

**Backend Development:** Expert in PHP and Laravel<br />
**Frontend Development:** Mastery in TypeScript, React, and JavaScript<br />
**DevOps:** Proficient in managing Ubuntu and AWS environments<br />
**Security:** Focused on implementing best practices and enforcing code standards<br />
**Tooling:** Extensive experience with ESLint, Prettier, PHP CS Fixer, Stylelint, and PHPStan<br />
**Reusable Solutions:** Creating templates and configuration stacks for optimized development<br />
**Development Environments:** Fluent in Windows 11 and Ubuntu (WSL2)<br />

## Contact

**📧 Email: <chocholatom1997@gmail.com>**<br />
**💻 Website: [https://premierstacks.com](https://premierstacks.com)**<br />
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
│   └── favicon.ico
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
    ├── browser_typescript_app.template
    ├── browser_typescript_library.template
    ├── browser_typescript_react_app.template
    ├── browser_typescript_react_library.template
    ├── node_typescript_app.template
    ├── node_typescript_library.template
    ├── node_typescript_react_app.template
    └── node_typescript_react_library.template

5 directories, 33 files
```
