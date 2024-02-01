//string to array of characters
const x = "radars";

const palinDromes = (x) => {
  if (x === x.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(palinDromes(x));

function isPalinDrome(word) {
  const chars = [...word];
  console.log(chars);
  for (let i = 0, j = chars.length - 1; j >= i; i++, j--) {
    if (chars[i] !== chars[j]) {
        return false
    }
  }
  return true
}
console.log(isPalinDrome("radar"));
