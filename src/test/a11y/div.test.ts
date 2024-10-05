import { checkButtonRole } from '../../utils/a11y/div/checks/checkButtonRole';
import { checkWrongAttributes } from '../../utils/a11y/div/checks/checkWrongAttributes';
import { messages } from '../../utils/messages';

describe('Accessibility check for div', () => {
  it('should return a message when div has aria-expanded', () => {
    const props = {
      'aria-expanded': true,
    };
    const warnings = checkWrongAttributes(props);
    expect(warnings).toEqual(messages.div.expanded);
  });

  it('should return a message when div is used as a button', () => {
    const props = {
      role: 'button',
    };
    const warnings = checkButtonRole(props);
    expect(warnings).toEqual(messages.div.button);
  });

  it('should return a message when div has an onClick event', () => {
    const props = {
      onClick: () => {},
    };
    const warnings = checkButtonRole(props);
    expect(warnings).toEqual(messages.div.button);
  });
});
