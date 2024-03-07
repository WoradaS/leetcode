/**
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead
 */

function compareNumbers(a, b) {
  return a && b ? a - b : -b + a;
}
function merge(nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
  nums1.push(...nums2);
  nums1.sort(compareNumbers);
  return nums1.sort(compareNumbers);
}

const testCases = [
  {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,
    nums2: [2, 5, 6],
    n: 3,
    output: [1, 2, 2, 3, 5, 6],
  },
  {
    nums1: [1],
    m: 1,
    nums2: [],
    n: 0,
    output: [1],
  },
  {
    nums1: [0],
    m: 0,
    nums2: [1],
    n: 1,
    output: [1],
  },
  {
    nums1: [-1, 0, 0, 3, 3, 3, 0, 0, 0],
    m: 6,
    nums2: [1, 2, 2],
    n: 3,
    output: [-1, 0, 0, 1, 2, 2, 3, 3, 3],
  },
  {
    nums1: [-1, -10, -2, 0, 0, 3],
    m: 6,
    nums2: [1, 2, 2],
    n: 3,
    output: [-10, -2, -1, 0, 0, 1, 2, 2, 3],
  },
];

console.log(`Merge Sorted Array`);

testCases.forEach((testCase, i) => {
  console.log(
    `CASE ${i + 1}: ${
      JSON.stringify(merge(testCase?.nums1, testCase?.m, testCase?.nums2, testCase?.n)) ==
      JSON.stringify(testCase?.output)
        ? "✅"
        : "❌"
    }`
  );
});
