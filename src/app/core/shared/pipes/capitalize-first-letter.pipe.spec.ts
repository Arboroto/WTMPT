import { CapitalizeFirstLetterPipe } from './capitalize-first-letter.pipe';

describe('CapitalizeFirstLetterPipe', () => {
  let pipe: CapitalizeFirstLetterPipe;

  beforeEach(() => {
    pipe = new CapitalizeFirstLetterPipe();
  });

  it('should return empty string if value is null', () => {
    const result = pipe.transform(null as any);
    expect(result).toBe('');
  });

  it('should capitalize the first letter of a string', () => {
    const input = 'hello';
    const expectedResult = 'Hello';
    const result = pipe.transform(input);
    expect(result).toBe(expectedResult);
  });

  it('should return an empty string if value is an empty string', () => {
    const input = '';
    const result = pipe.transform(input);
    expect(result).toBe('');
  });

  it('should preserve the rest of the string after capitalizing the first letter', () => {
    const input = 'hello world';
    const expectedResult = 'Hello world';
    const result = pipe.transform(input);
    expect(result).toBe(expectedResult);
  });
});

