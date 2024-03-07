function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function isValid(str) {
  const brackets = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  const stack = [];
  for (let s of  str) {
    if (brackets[s]) {
        stack.push(s);
    } else if (stack[stack.length - 1] === getKeyByValue(brackets, s)) {
        stack.pop();
    } else {
        return false;
    }
    
  }
  return stack.length === 0;
}


const testCases = [
  {
    brackets: "{}",
    result: true,
  },
  {
    brackets: "()[]{}",
    result: true,
  },
  {
    brackets: "(]",
    result: false,
  },
  {
    brackets: "([)]",
    result: false,
  },
  {
    brackets: "([]{})",
    result: true,
  },
  {
    brackets: "[",
    result: false,
  },
];

console.log(`IsValid`);

testCases.forEach((testCase, i) => {
  console.log(`CASE ${i + 1}: ${isValid(testCase?.brackets) == testCase?.result ? "✅" : "❌"}`);
});
