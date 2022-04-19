// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (int) => {
  const sign = Math.sign(int);

  const absArr = Math.abs(int).toString().split("");
  const reversed = absArr.reverse().join("") * sign;
  return reversed;
};

module.exports = reverseInt;
