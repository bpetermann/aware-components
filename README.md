# Aware Components

[![NPM version][npm-image]][npm-url]
![npm-typescript]
![GitHub License](https://img.shields.io/github/license/bpetermann/aware-components)
![NPM Downloads](https://img.shields.io/npm/dm/aware-components)

**Aware Components** is an evolving React component library focused on accessibility (a11y). It provides enhanced versions of common HTML elements like `<a>`, `<button>`, `<div>`, `<h1>`-`<h6>`, `<img>`, and more, designed to automatically check for accessibility issues and provide console warnings when necessary.

The goal is to improve accessibility by ensuring proper usage of naming conventions, color contrast, ARIA labeling, and the correct nesting of elements.

## Features

- **Built-in Accessibility Checks**: Each component provides real-time accessibility feedback, including warnings about heading levels, contrast issues, ARIA labels, and more.
- **Common HTML Elements**: Components are based on familiar HTML elements, making them easy to integrate into existing projects.
- **Customizable Warnings**: Developers receive accessibility warnings during development, enabling quick fixes and improvements.
- **Expandable**: While currently focused on accessibility, the library is designed to expand in the future.

## Stability Warning ⚠️

> **Note**: This is an early version of and is still under active development. Features may change, and some components may not be fully stable. Use with caution.

## Usage

For optimal accessibility monitoring, wrap your entire application with the `A11yProvider`:

```jsx
import React from 'react';
import { A11yProvider } from './context/a11y';
import { H1, Button } from './components';

function App() {
  return (
    <A11yProvider>
      <div>
        <H1>Welcome to Aware Components!</H1>
        <Button onClick={() => alert('Hello')}>Click me</Button>
      </div>
    </A11yProvider>
  );
}

export default App;
```

The A11yProvider is required for checks that depend on the presence or number of components, such as ensuring proper heading levels or unique landmarks like <main>. Wrapping your app in A11yProvider allows these context-aware checks to function correctly.

## Current Focus

- Ensuring accessibility by default for the most common HTML components.
- Catching common a11y issues like:
  - Heading level misuse (e.g., too many h1 elements)
  - Color contrast issues
  - Proper use of ARIA labels
  - Nesting and structure of semantic elements

## Future Plans

- Expand to more specialized components
- Offer deeper customization for a11y checks

## Contributing

Create a branch on your fork, add commits to your fork, and open a pull request from your fork to this repository.

## Changelog

To check full changelog click [here](https://github.com/bpetermann/aware-components/blob/main/CHANGELOG.md)

## License

[MIT][github-license-url]

[npm-url]: https://www.npmjs.com/package/aware-components
[npm-image]: https://img.shields.io/npm/v/aware-components
[npm-url]: https://www.npmjs.com/package/aware-components
[npm-image]: https://img.shields.io/npm/v/aware-components
[github-license]: https://img.shields.io/github/license/bpetermann/aware-components.svg
[github-license-url]: https://github.com/bpetermann/aware-components/blob/main/LICENSE
[npm-typescript]: https://img.shields.io/npm/types/aware-components
