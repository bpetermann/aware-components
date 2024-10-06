import { checkAltText } from '../../utils/a11y/img/checks/checkAltText';
import { checkGenericAlt } from '../../utils/a11y/img/checks/checkGenericAlt';
import { messages } from '../../utils/messages';

describe('Accessibility check for img', () => {
  it('warns when <img> has an generic alt text', () => {
    const alt = 'click';
    const props = { alt };
    const warnings = checkGenericAlt(props);
    expect(warnings).toEqual(messages.img.generic + alt);
  });

  it('warns when <img> has no alt text', () => {
    const alt = '';
    const props = { alt };
    const warnings = checkAltText(props);
    expect(warnings).toEqual(messages.img.alt);
  });

  it('should pass when <img> has a valid alt text', () => {
    const alt = 'Contact Support';
    const props = { alt };
    const warnings = checkGenericAlt(props);
    expect(warnings).toBeNull();
  });
});
