# Aware Components

**Aware Components** is an evolving React component library focused on accessibility (a11y). It provides enhanced versions of common HTML elements like `<a>`, `<button>`, `<div>`, `<h1>`-`<h6>`, `<img>`, and more, designed to automatically check for accessibility issues and provide warnings when necessary.

The library aims to improve accessibility by ensuring correct naming, color contrast, ARIA labeling, and proper nesting of elements.

> **Note**: The library is currently under development and is not yet available as an NPM package.

## Features

- **Built-in Accessibility Checks**: Each component provides real-time accessibility feedback (e.g., warnings about heading levels, contrast issues, ARIA labels, and more).
- **Common HTML Elements**: Components are based on familiar HTML elements, making the library easy to integrate into existing projects.
- **Customizable Warnings**: Developers can receive warnings during development for easy a11y fixes.
- **Expandable**: Currently focused on accessibility, but planned to expand in the future.

## Installation

To try out the library locally:

```bash
git clone https://github.com/bpetermann/aware-components.git
cd aware-components
npm install
npm start
```

Once the project is running, you can import and use the components:

```jsx
import {
  A,
  Button,
  Div,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Img,
  Nav,
  Section,
} from './components';
```

## Usage

For optimal accessibility monitoring, wrap your entire application inside the A11yProvider:

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

This setup allows the components to check for accessibility issues and provide warnings during development. It ensures better adherence to WCAG guidelines without manual validation.

## Current Focus

- Ensuring accessibility by default for the most common HTML components.
- Catching common a11y issues like:
  - Heading level misuse (e.g., too many h1 elements)
  - Color contrast issues
  - Proper use of ARIA labels
  - Nesting and structure of semantic elements

##  Future Plans

- Expand to more specialized components
- Offer deeper customization for a11y checks

##  Contributing

Contributions are welcome! If you'd like to improve the components or add new features, feel free to fork the repository, make your changes, and submit a pull request.
