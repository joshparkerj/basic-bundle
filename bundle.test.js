const { s, t } = require('./dist/main');
const text = require('./src/util/help-text.json');

describe('bundle defines two functions', () => {
  it('t returns message', () => {
    // eslint-disable-next-line no-undef
    expect(t()).toBe(text);
  });

  it('s returns message prefix', () => {
    // eslint-disable-next-line no-undef
    expect(s()).toBe(text.slice(0, 5));
  });
});
