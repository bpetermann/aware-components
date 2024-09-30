import { checkMailLink } from '../../utils/a11y/anchor/checks/checkMailLink';

describe('Accessibility check for anchor', () => {
  it('should pass when button has aria-label', () => {
    const props = {
      href: 'mailto:john.doe@gmail.com',
      children: 'john.doe@gmail.com',
    };
    const warnings = checkMailLink(props);
    expect(warnings).toBeNull();
  });
});
