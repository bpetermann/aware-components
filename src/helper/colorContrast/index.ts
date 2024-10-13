import { cssNamedColors } from './cssNamedColors';

export const namedColorToRgb = (
  color: string
): [number, number, number] | null => {
  const hex = cssNamedColors[color.toLowerCase()];
  return hex ? hexToRgb(hex) : null;
};

export const hexToRgb = (hex: `#${string}`): [number, number, number] => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
];

const convertToRgb = (
  color: `#${string}` | string
): [number, number, number] | null =>
  color.startsWith('#')
    ? hexToRgb(color as `#${string}`)
    : namedColorToRgb(color);

export const luminance = (rgb: [number, number, number]) => {
  const [r, g, b] = rgb.map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return r * 0.2126 + g * 0.7152 + b * 0.0722;
};

export const contrastRatio = (lum1: number, lum2: number) =>
  lum1 > lum2 ? (lum1 + 0.05) / (lum2 + 0.05) : (lum2 + 0.05) / (lum1 + 0.05);

const meetsContrastRequirement = (
  contrastRatio: number,
  level: 'AA' | 'AAA',
  textSize: 'small' | 'large'
): boolean =>
  level === 'AA'
    ? textSize === 'small'
      ? contrastRatio >= 4.5
      : contrastRatio >= 3
    : textSize === 'small'
    ? contrastRatio >= 7
    : contrastRatio >= 4.5;

/**
 * Checks if the contrast ratio between two colors meets the specified WCAG level of accessibility.
 *
 * @param {`#${string}`| string} textColor - The textColor color in hex format (e.g., `#ffffff` for white) or name (e.g., "red").
 * @param {`#${string}`| string} bgColor - The bgColor color in hex format (e.g., `#000000` for black) or name (e.g., "red").
 * @param {'AA' | 'AAA'} level - The WCAG accessibility level to check ('AA' or 'AAA').
 *  - 'AA' requires a contrast ratio of at least 4.5:1 for small text and 3:1 for large text.
 *  - 'AAA' requires a contrast ratio of at least 7:1 for small text and 4.5:1 for large text.
 * @param {'small' | 'large'} text - The size of the text ('small' for regular text or 'large' for text above 18pt or bold).
 *  - Small text: less than 18pt or regular weight.
 *  - Large text: 18pt or larger, or bold text.
 *
 * @returns {boolean} - Returns `true` if the contrast ratio meets the specified WCAG level and text size, otherwise `false`.
 *
 * @example
 * // Check if #555555 on #ffffff meets AA level for small text
 * const isAccessible = isRatioOk('#555555', '#ffffff', 'AA', 'small'); // true
 *
 * @example
 * // Check if #555555 on #ffffff meets AAA level for large text
 * const isAccessible = isRatioOk('#555555', '#ffffff', 'AAA', 'large'); // true
 */
export const isRatioOk = (
  textColor: `#${string}` | string,
  bgColor: `#${string}` | string,
  level: 'AA' | 'AAA',
  textSize: 'small' | 'large'
): boolean => {
  const color1 = convertToRgb(textColor);
  const color2 = convertToRgb(bgColor);

  return !color1 || !color2
    ? true
    : meetsContrastRequirement(
        contrastRatio(luminance(color1), luminance(color2)),
        level,
        textSize
      );
};
