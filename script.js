const extendHex = (s) => {
  // write your code here
 let str = '#';
  for (let i = 1; i < s.length; i++) {
    str += s[i] + s[i]; // Double each character except the first one
  }
  return str;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
