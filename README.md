# fiveten-components

> A collection of [web-components](https://www.webcomponents.org/introduction) to share [510](https://www.510.global/) styles, designs and common UI-patterns across all our (web-)products.

---

<!-- TODO:TOC -->

---

## Status

By design this collection is a constant work-in-progress.

Latest releases and notable changes are in the [CHANGELOG](CHANGELOG.md).

Automated tests run on the latest version: ...

---

## Usage

...

---

## Development

### Tools in use

- [VS Code](https://code.visualstudio.com/) as IDE/code-editor
  - [Workspace extension recommendations for VS Code](.vscode/extensions.json)
    In VS Code go to: "_Extensions_" and use the filter: "_Recommended_";
    A list should be shown and each extension can be installed individually.
- [Prettier](https://prettier.io/) to format code
- [stencil](https://stenciljs.com/) to build components' files/assets

### Getting Started

- Install environment requirements:

  Install the [Node.js](https://nodejs.org) version specified in the [`.node-version`](.node-version)-file.  
  To prevent conflicts it is recommended to use a 'version manager': [`fnm`](https://github.com/Schniz/fnm#readme)  
  After installing that, run in this folder/directory:

      fnm use

- Install dependencies (from this folder):

      npm install

### Testing

To run all tests for all components, run:

    npm test

To run tests for a specific component, run:

    npm test --workspace <component-name>

### How to write tests for a component

- Make sure to use the [Arrange-Act-Assert pattern](https://github.com/goldbergyoni/javascript-testing-best-practices#-%EF%B8%8F-12-structure-tests-by-the-aaa-pattern) in each scenario/test
- Test the component without any properties set/provided
- Test the component with all properties set (and everything in between)

## Glossary

A list of definitions of terms **_we_** use.

- ...

---

## License

Released under the Apache 2.0 License. See [LICENSE](./LICENSE).
