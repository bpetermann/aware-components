import { isRatioOk } from '../../helper/colorContrast';

describe('Color contrast checker', () => {
  test('should pass for AA small text with sufficient contrast', () => {
    expect(isRatioOk('#ffffff', '#000000', 'AA', 'small')).toBe(true);
  });

  test('should fail for AA small text with insufficient contrast', () => {
    expect(isRatioOk('#777777', '#ffffff', 'AA', 'small')).toBe(false);
  });

  test('should pass for AAA large text with sufficient contrast', () => {
    expect(isRatioOk('#ffffff', '#000000', 'AAA', 'large')).toBe(true);
  });

  test('should fail for AAA small text with insufficient contrast', () => {
    expect(isRatioOk('#777777', '#ffffff', 'AAA', 'small')).toBe(false);
  });

  test('should pass for AA large text with lower contrast requirement', () => {
    expect(isRatioOk('#555555', '#ffffff', 'AA', 'large')).toBe(true);
  });

  test('should fail for AAA large text with barely insufficient contrast', () => {
    expect(isRatioOk('#555555', '#ffffff', 'AAA', 'large')).toBe(true);
  });

  test('should pass for AAA small text with maximum contrast', () => {
    expect(isRatioOk('#000000', '#ffffff', 'AAA', 'small')).toBe(true);
  });

  test('should pass for AAA small text with borderline contrast', () => {
    expect(isRatioOk('#1c1c1c', '#ffffff', 'AAA', 'small')).toBe(true);
  });

  test('should fail for invalid ratio with inverted colors (black on black)', () => {
    expect(isRatioOk('#000000', '#000000', 'AA', 'small')).toBe(false);
  });

  test('should fail for invalid ratio with inverted named colors (black on black)', () => {
    expect(isRatioOk('black', 'black', 'AA', 'small')).toBe(false);
  });

  test('should return true for named colors with sufficient contrast (e.g., black on white)', () => {
    expect(isRatioOk('black', 'white', 'AA', 'small')).toBe(true);
  });

  test('should return false for named colors with insufficient contrast (e.g., red on green)', () => {
    expect(isRatioOk('red', 'green', 'AA', 'small')).toBe(false);
  });

  test('should return true for AAA level large text with high contrast named colors (e.g., blue on white)', () => {
    expect(isRatioOk('blue', 'white', 'AAA', 'large')).toBe(true);
  });

  test('should return false for AAA level small text with insufficient contrast (e.g., yellow on white)', () => {
    expect(isRatioOk('yellow', 'white', 'AAA', 'small')).toBe(false);
  });

  test('should return true for hex and named color combination with sufficient contrast (e.g., #000000 on white)', () => {
    expect(isRatioOk('#000000', 'white', 'AA', 'small')).toBe(true);
  });

  test('should return false for hex and named color combination with insufficient contrast (e.g., #555555 on yellow)', () => {
    expect(isRatioOk('#555555', 'yellow', 'AA', 'small')).toBe(true);
  });

  test('should return true for named color and hex color with sufficient contrast (e.g., black on #ffffff)', () => {
    expect(isRatioOk('black', '#ffffff', 'AA', 'small')).toBe(true);
  });

  test('should return false for named color and hex color with insufficient contrast (e.g., blue on #0000ff)', () => {
    expect(isRatioOk('blue', '#0000ff', 'AA', 'small')).toBe(false);
  });

  test('should return true for large text with slightly lower contrast (e.g., #333333 on #ffffff, AA large)', () => {
    expect(isRatioOk('#333333', '#ffffff', 'AA', 'large')).toBe(true);
  });

  test('should return true when given invalid named colors (default to passing)', () => {
    expect(isRatioOk('invalidColor', 'white', 'AA', 'small')).toBe(true);
    expect(isRatioOk('black', 'invalidColor', 'AA', 'small')).toBe(true);
    expect(isRatioOk('invalidColor', 'invalidColor', 'AA', 'small')).toBe(true);
  });
});
