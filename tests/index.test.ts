import SF from '../src/index';

describe('StringFormatter', () => {
  test('capitalizeFirstLetter', () => {
    expect(SF.capitalizeFirstLetter('hello')).toBe('Hello');
  });

  test('allCaps', () => {
    expect(SF.allCaps('hello')).toBe('HELLO');
  });

  test('capitalizeWords', () => {
    expect(SF.capitalizeWords('hello world')).toBe('Hello World');
  });

  test('capitalizedHeadline', () => {
    expect(SF.capitalizedHeadline('hello world from the moon')).toBe('Hello World from the Moon');
  });

  test('removeExtraSpaces', () => {
    expect(SF.removeExtraSpaces('  hello   world  ')).toBe('hello world');
  });

  test('kebobCase', () => {
    expect(SF.kebobCase('Hello World')).toBe('hello-world');
  });

  test('snakeCase', () => {
    expect(SF.snakeCase('Hello World')).toBe('hello_world');
  });

  test('camelCase', () => {
    expect(SF.camelCase('hello world')).toBe('helloWorld');
  });

  test('shift', () => {
    expect(SF.shift('hello')).toBe('elloh');
  });

  test('makeHashTag', () => {
    expect(SF.makeHashTag('hello world moon')).toEqual(['#hello', '#world', '#moon']);
  });

  test('isEmpty', () => {
    expect(SF.isEmpty('   \n  \t ')).toBe(true);
    expect(SF.isEmpty('hello')).toBe(false);
  });
});
