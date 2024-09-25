export const messages = {
  button: {
    text: 'A button without visible text or an image child must include aria-label, aria-labelledby, or visible text for accessibility.',
    role: "Don't use abstract roles in your sites and applications. They are for use by browsers.",
    switch:
      '[Zugang] A button that toggles a setting must indicate its active state using the "aria-checked" attribute, which reflects the widget’s current state.',
  },
} as const;
