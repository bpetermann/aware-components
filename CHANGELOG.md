# Changelog

All notable changes to the "aware-components" library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- `<Table>` components with accessibility (a11y) checks to ensure `<th>` elements are present, `scope` attributes are used with multiple headers, and `id` and `headers` attributes are included in complex tables for improved screen reader support.
- `<Th>` components with accessibility (a11y) checks to validate necessary attributes based on the complexity of table headers.
- `<Td>` components with accessibility (a11y) checks to validate necessary attributes based on the complexity of table headers.
- `<Tr>` components to support registering associated table headers.
- `<Caption>` components to detect a nested `<caption>` indside a `<TableProvider>`.
- `<TableProvider>` Component: Introduced a context provider for more fine-grained table accessibility checks.

## [0.5.0] - 2024-11-07

### Changed

- Enhanced accessibility check for generic text in the `<A>` component to include applicable ARIA roles.

### Added

- `<Hr>` component with accessibility checks to prevent excessive usage.
- Accessibility check in `<A>` component to flag empty text content.
- Accessibility check in `<A>` component to flag all caps text content.
- Exports the `isRatioOk` check, which verifies if the contrast ratio between a text color and background color meets WCAG accessibility standards (level AA or AAA) for small or large text
- Exports the `canHaveAriaHidden` check, which verifies if the aria-hidden attribute can be applied to the component.

## [0.4.2] - 2024-11-04

### Fixed

- Enhanced `getChildren` helper function to support arrays, ensuring it handles both single elements and arrays consistently.

### Added

- `<Audio>` components with accessibility (a11y) checks (e.g., warnings for autoplay without muted, visible controls, loop, and checks for a transcript or accessible label).
- `<Video>` components with accessibility (a11y) checks (e.g., warnings for autoplay without muted, visible controls, loop, and checks for a `<track>` element of kind captions).
- `<P>` components with accessibility (a11y) checks (e.g., warnings for use within `<header>`, color contrast issues, and minimum font size enforcement).

## [0.3.2] - 2024-10-29

### Added

- `<Fieldset>` components with accessibility (a11y) checks (e.g., existing `<legend>`).
- `<Input>` combuttonponents with accessibility (a11y) checks (e.g., existing color contrast and existing `<Label>` or `aria-labelledby`).
- `<Textarea>` components with accessibility (a11y) checks (e.g., existing color contrast and existing `<Label>` or `aria-labelledby`).
- `<Select>` components with accessibility (a11y) checks (e.g., existing color contrast and existing `<Label>` or `aria-labelledby` and check for `<optgroup>`).
- `<Optgroup>` components with obligatory `label` attribute.

## [0.2.2] - 2024-10-25

### Fixed

- Disabled hooks in non-development mode.

## [0.2.1] - 2024-10-25

### Fixed

- React version-independent check for `inert`
- Corrected `<H6>`tag name

### Added

- Expanded `<A>` tag accessibility checks to include checks for invalid attributes, tabindex issues, and detection of skip links.
- Enhanced `<Div>` "div soup" check to detect nested `<Div>` components.

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

[0.1.0]: https://github.com/bpetermann/aware-components/releases/tag/v0.1.1
[0.1.1]: https://github.com/bpetermann/aware-components/releases/tag/v0.1.1
[0.2.1]: https://github.com/bpetermann/aware-components/releases/tag/v0.2.1
[0.2.2]: https://github.com/bpetermann/aware-components/releases/tag/v.0.2.2
[0.3.2]: https://github.com/bpetermann/aware-components/releases/tag/v0.3.2
[0.4.2]: https://github.com/bpetermann/aware-components/releases/tag/v0.4.2
[0.5.0]: https://github.com/bpetermann/aware-components/releases/tag/v0.4.2
