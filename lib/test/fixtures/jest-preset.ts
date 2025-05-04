export default `import { describe, expect, test, fit, xtest } from '@jest/globals';

// jest/no-focused-tests: Disallows focused tests (.only or fdescribe/fit).
fit('Focused test', () => {
  expect(true).toBe(true);
});

describe('Test Suite', () => {
  // jest/no-disabled-tests: Disallows disabled tests (.skip or xdescribe/xtest).
  xtest('Skipped test', () => {
    expect(true).toBe(true);
  });

  test('Conditional expect', () => {
    const condition = Math.random() > 0.5;
    if (condition) {
      // jest/no-conditional-expect: Expect must be inside the test block directly.
      expect(true).toBe(true);
    }
  });

  test('Valid expect', () => {
    // jest/valid-expect: Expect must have an assertion attached.
    expect(true);
  });

  test('Prefer to be', () => {
    const value = null;
    // jest/prefer-to-be-null (or similar based on config): Suggests using toBeNull().
    expect(value).toBe(null);
    // jest/prefer-to-be: Suggests using toBeTruthy/toBeFalsy
    expect(true).toBe(true);
  });

  // jest/valid-title: Test title should not start with "test".
  test('test invalid title', () => {
    expect(1).toBe(1);
  });
});

// jest/no-export: Should not export from test file
export const helper = () => {};
`
