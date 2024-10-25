# Changelog

All notable changes to the "aware-components" library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.1] - 2024-10-25

### Fixed

- React version-independent check for `inert`
- `<H6>`tag name

### Added

- Expanded `<A>` tag accessibility checks, including checks for invalid attributes, `tabindex` issues, and detection of skip links.
- Expanded `<Div>` "div soup" check to include nested `<Div>` components.

## [0.1.1] - 2024-10-19

### Fixed

- Update docs and license

## [0.1.0] - 2024-10-19

### Added

- `<H1>` - `<H6>` components with accessibility (a11y) checks (e.g., proper heading levels, ensuring a unique `<h1>` element).
- `<A>` component with a11y checks (e.g., correct `mailto` links, checks for generic link text).
- `<Button>` component with a11y checks (e.g., ensures text content is present and meets minimum size requirements).
- `<Div>` component with a11y checks (e.g., checks for “div soup”, correct attributes usage).
- `<Img>` component with a11y checks (e.g., ensures `alt` text is provided and avoids generic `alt` text).
- `<Main>` component with a11y checks (e.g., ensures there is only one unique `<main>` element).
- `<Nav>` component with a11y checks (e.g., ensures correct ARIA labels when multiple `<nav>` elements are present).
- `<Section>` component with a11y checks (e.g., ensures correct ARIA labels when multiple `<section>` elements are present).
- `<A11yProvider>` context provider component that registers the count of `<Nav>`, `<Section>`, `<Main>`, and heading elements for accessibility checks.

[0.1.1]: https://github.com/bpetermann/vscode-zugang/releases/tag/v0.0.1
