import { CapitalizeWordPipe } from './capitalize-word.pipe';

describe('CapitalizeWordPipe', () => {
  let pipe: CapitalizeWordPipe;

  beforeEach(() => {
    pipe = new CapitalizeWordPipe();
  });

  it('should return empty string if value is null', () => {
    const result = pipe.transform(null as any);
    expect(result).toBe('');
  });

  it('should convert string to uppercase', () => {
    const input = 'hello';
    const expectedResult = 'HELLO';
    const result = pipe.transform(input);
    expect(result).toBe(expectedResult);
  });

  it('should return an empty string if value is an empty string', () => {
    const input = '';
    const result = pipe.transform(input);
    expect(result).toBe('');
  });

  it('should preserve the string if it is already in uppercase', () => {
    const input = 'HELLO';
    const result = pipe.transform(input);
    expect(result).toBe(input);
  });
});
