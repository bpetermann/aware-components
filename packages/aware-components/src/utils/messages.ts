export const messages = {
  button: {
    text: '[Button] A button without visible text or an image child must include aria-label, aria-labelledby, or visible text for accessibility.',
    role: "[Button] Don't use abstract roles in your sites and applications. They are for use by browsers.",
    switch:
      '[Button] A button that toggles a setting must indicate its active state using the "aria-checked" attribute, which reflects the widget’s current state.',
    min: '[Button] Buttons should have a minimum target size of 24 X 24 CSS pixels to make them more clickable.',
  },
  anchor: {
    mail: '[A] Include the email address in the link text to help users who may find switching between applications difficult.',
    generic:
      '[A] Avoid using generic link text, as it can be unclear to users what the link leads to. Link text: ',
    hidden:
      '[A] A focusable element, or an element containing focusable children, should not have the aria-hidden attribute. Doing so can lead to accessibility issues, as it hides content from assistive technologies while still being interactive.',
    onclick: '[A] Avoid assigning click events directly to links.',
    href: '[A] Anchor element must have a valid href attribute.',
    tabIndex:
      '[A] Avoid using negative tabindex values on elements like links or buttons that require direct keyboard navigation.',
    skipLink:
      '[A] Consider providing a skip link, as it is essential for accessibility, allowing keyboard and screen reader users to bypass repetitive content and jump directly to the main content, improving navigation and usability.',
  },
  div: {
    soup: '[Div] Nesting too many <div>s can create complex, hard-to-navigate structures for screen readers and other assistive technologies. This can make it difficult for users with disabilities to understand the content, reducing accessibility and usability. Keep the HTML structure simple and meaningful by using proper semantic elements instead of excessive <div> nesting. Counted divs: ',
    expanded:
      '[Div]The "aria-expanded" attribute should be applied to the element that controls the expansion, not the element being expanded.',
    button:
      '[Div] Use the native HTML <button> element instead of assigning a role="button" or adding onclick events to a <div>, unless a specific use case justifies it.',
    hidden:
      '[Div] A focusable element, or an element containing focusable children, should not have the aria-hidden attribute. Doing so can lead to accessibility issues, as it hides content from assistive technologies while still being interactive.',
    role: "[Div] Don't use abstract roles in your sites and applications. They are for use by browsers.",
  },
  img: {
    alt: '[Img] Use the alt attribute to provide a text description for images. For decorative images, use an empty alt attribute to indicate they should be ignored by assistive technologies.',
    generic:
      '[Img] Provide meaningful alternative text that accurately describes the image content, rather than simple details like file types (e.g., .png, .jpg) or the fact that it is an image. For decorative images, use an empty alt attribute to indicate they should be ignored by assistive technologies. Text: ',
  },
  heading: {
    skip: 'Do not skip heading levels. Always start with an <h1> and follow with <h2>, <h3>, and so on.',
    unique:
      '[H1] Each page should have a single <h1> element that summarizes the content, similar to the purpose of the <title> element. Number of <h1> elements: ',
    contrast:
      'Insufficient contrast between text color and background color. To meet WCAG accessibility standards, ensure that the contrast ratio is at least 4.5:1 for small text or 3:1 for large text at the AA level. For AAA level compliance, the contrast ratio should be at least 7:1 for small text and 4.5:1 for large text. Consider adjusting the text color or background color to improve readability for users with visual impairments.',
  },
  section: {
    label:
      '[Section] When using more than one <section> element on a page, label them with aria-labelledby or aria-label to differentiate them for assistive technology users.',
  },
  nav: {
    label:
      '[Nav] When using more than one <nav> element on a page, label them with aria-labelledby or aria-label to differentiate them for assistive technology users.',
  },
  main: {
    unique: '[Main] Only one visible <main> element should exist on a page.',
  },
  styles: {
    contrast:
      'Insufficient contrast between text color and background color. To meet WCAG accessibility standards, ensure that the contrast ratio is at least 4.5:1 for small text or 3:1 for large text at the AA level. For AAA level compliance, the contrast ratio should be at least 7:1 for small text and 4.5:1 for large text. Consider adjusting the text color or background color to improve readability for users with visual impairments.',
  },
} as const;
