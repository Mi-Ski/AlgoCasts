// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  const strArr = str.split("");
  const arrObj = {};

  for (const el of strArr) {
    arrObj[el] = arrObj[el] + 1 || 1;
  }

  let highestChar = "";
  let highestNum = 0;

  for (const el of Object.keys(arrObj)) {
    if (arrObj[el] > highestNum) {
      highestNum = arrObj[el];
      highestChar = el;
    }
  }

  return highestChar;
};

module.exports = maxChar;
