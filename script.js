const extendHex = (s) => {
  // write your code here
	let str = '';
	str+='#';
	for (let i = 0; i <s.length; i++) {
		if (i>0) {
			str+=s[i];
			str+=s[i];
		}
	}
	return str;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
