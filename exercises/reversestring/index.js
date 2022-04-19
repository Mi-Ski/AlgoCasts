// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ? Array.prototype.reverse() method
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// ? forloop method
// function reverse(str) {
//   let length = str.length;
//   let reversed = [];

//   for (let i = length; i >= 0; i--) {
//     reversed.push(str[i]);
//   }

//   return reversed.join("");
// }

// ? forof method
// function reverse(str) {
//   let length = str.length;
//   let reversed = [];

//   for (const el of str) {
//     reversed.unshift(el);
//   }

//   return reversed.join("");
// }

// ? arr.reduce() method
const reverse = (str) => {
  debugger;
  return str.split("").reduce((whole, el) => el + whole, "");
};

reverse("hello");

module.exports = reverse;
