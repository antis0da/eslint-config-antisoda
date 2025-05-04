export default `// Violations for eslint:recommended

// no-undef: 'undeclaredVar' is not defined.
// no-unused-vars: 'unusedVar' is assigned a value but never used.
const unusedVar = 1;

function checkCondition() {
  // no-constant-condition: Unexpected constant condition.
  if (true) {
    // no-console: Unexpected console statement.
    console.log('This should be flagged');
  }

  // no-unreachable: Unreachable code detected.
  return;
  const x = 5;
}

// no-dupe-keys: Duplicate key 'a'.
const obj = { a: 1, a: 2 };

// Use undeclared variable to trigger no-undef
// console.log(undeclaredVar); // Commented out to avoid runtime error, but ESLint should still flag it statically

// Function declared but not used
function unusedFunction() {}
`
