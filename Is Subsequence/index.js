/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (t?.length == 0 && s?.length !== 0) return false;
  let k = 0;
  let status = true;
  for (let i = 0; i < s?.length; i++) {
    if (k === t?.length) {
      status = false;
      break;
    }
    for (let index_k = k; index_k < t?.length; index_k++) {
      if (s.slice(i, i + 1) === t.slice(index_k, index_k + 1)) {
        k = index_k + 1;
        break;
      } else {
        if (index_k + 1 === t?.length) {
          status = false;
          break;
        }
      }
    }
  }
  return status;
};
