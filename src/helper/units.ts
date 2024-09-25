const ROOT_FONT_SIZE = 16;

export const convertToPx = (
  size: string,
  rootFontSize = ROOT_FONT_SIZE
): number => {
  if (size.endsWith('rem') || size.endsWith('em')) {
    const value = parseFloat(size);
    return value * rootFontSize;
  }
  return parseFloat(size);
};
