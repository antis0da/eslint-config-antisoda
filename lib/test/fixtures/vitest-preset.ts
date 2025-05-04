export default `import { describe, expect, test, it, vi, F } from 'vitest'; // Assuming 'F' is not a standard export for demo

// vitest/no-focused-tests: Disallows focused tests (.only or fdescribe/fit).
test.only('Focused test', () => {
  expect(true).toBe(true);
});

describe('Test Suite', () => {
  // vitest/no-disabled-tests: Disallows disabled tests (.skip or xdescribe/xtest).
  test.skip('Skipped test', () => {
    expect(true).toBe(true);
  });

  it('Conditional expect', () => {
    const condition = Math.random() > 0.5;
    if (condition) {
      // vitest/no-conditional-expect: Expect must be inside the test block directly.
      expect(true).toBe(true);
    }
  });

  test('Valid expect', () => {
    // vitest/valid-expect: Expect must have an assertion attached.
    expect(true);
  });

  test('Prefer specific matcher', () => {
    const value = null;
    // vitest/prefer-to-be-null (or similar): Suggests using toBeNull().
    expect(value).toBe(null);
    // vitest/prefer-to-be-truthy / falsy
    expect(true).toBe(true);
  });

  // vitest/valid-title: Test title should be descriptive. (May depend on exact rules enabled)
  // vitest/prefer-lowercase-title: Titles might be preferred in lowercase.
  test('Test invalid title', () => {
    expect(1).toBe(1);
  });

  test('Using vi', () => {
    // vitest/no-standalone-expect: expect must be inside a test block
    // expect(vi).toBeDefined(); // This might be flagged outside test depending on config
  });
});

// vitest/no-commented-out-tests: Flag commented out tests
// test('Commented out', () => {
//   expect(false).toBe(true);
// });

// Outside describe/test block expect
// expect(1).toBe(1); // vitest/no-standalone-expect
`
