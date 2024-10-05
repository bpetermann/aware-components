export const messages = {
  button: {
    text: 'A button without visible text or an image child must include aria-label, aria-labelledby, or visible text for accessibility.',
    role: "Don't use abstract roles in your sites and applications. They are for use by browsers.",
    switch:
      'A button that toggles a setting must indicate its active state using the "aria-checked" attribute, which reflects the widget’s current state.',
    min: 'Buttons should have a minimum target size of 24 X 24 CSS pixels to make them more clickable.',
  },
  anchor: {
    mail: 'Include the email address in the link text to help users who may find switching between applications difficult.',
    generic:
      'Avoid using generic link text, as it can be unclear to users what the link leads to. Link text: ',
    hidden:
      'A focusable element, or an element containing focusable children, should not have the aria-hidden attribute. Doing so can lead to accessibility issues, as it hides content from assistive technologies while still being interactive.',
  },
  div: {
    button:
      'Use the native HTML <button> element instead of assigning a role="button" or adding onclick events to a <div>, unless a specific use case justifies it.',
  },
} as const;
