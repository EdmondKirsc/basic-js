const CustomError = require("../extensions/custom-error");
  let ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const getLetterIndex = (letter) => ALPHABET.indexOf(letter);
	const ALPHABET_SYMBOL_COUNT = 25;
	const getEncryptedSymbol = (textLetter, keyLetter) => {
		let encryptedSymbolIndex = getLetterIndex(textLetter) + getLetterIndex(keyLetter);
		if (encryptedSymbolIndex > 25) {
			encryptedSymbolIndex -= 26;
		}
		return ALPHABET[encryptedSymbolIndex];
	}
	const getDecryptedSymbol = (textLetter, keyLetter) => {
  		let decryptedSymbolIndex = getLetterIndex(textLetter) + 26 - getLetterIndex(keyLetter);
    	if (decryptedSymbolIndex > 25) {
    		decryptedSymbolIndex -= 26;
  		}
  		return ALPHABET[decryptedSymbolIndex];
	}

class VigenereCipheringMachine {
    constructor (isDirect = true) {
      this.isDirect = isDirect;
    }
  	encrypt(text, key) {
  		if (!(text && key)) {
  			throw new Error("THROWN");
  		}
  		let encryptedText = '';
  		let currentKeyIndex = 0;
  		text = text.toUpperCase();
  		key = key.toUpperCase();
  		for (let i = 0; i < text.length; i++) {
    		if(ALPHABET.includes(text[i])) {
     			encryptedText += getEncryptedSymbol(text[i], key[currentKeyIndex]);
      			currentKeyIndex++;
      			if(currentKeyIndex >= key.length) {
        			currentKeyIndex = 0;
      			} 
    		} else {
      			encryptedText += text[i]
    		}
  		}
      if (this.pepemennay === false) {
        encryptedText = encryptedText.split("").reverse().join("");
      }
		return encryptedText;
	}
	decrypt(text, key) {
  		if (!(text && key)) {
    		throw new Error("THROWN");
  		}
  		let decryptedText = '';
  		let currentKeyIndex = 0;
  		text = text.toUpperCase();
  		key = key.toUpperCase();
  		for (let i = 0; i < text.length; i++) {
    		if(ALPHABET.includes(text[i])) {
      			decryptedText += getDecryptedSymbol(text[i], key[currentKeyIndex]);
      			currentKeyIndex++;
      			if(currentKeyIndex >= key.length) {
        			currentKeyIndex = 0;
      			} 
    		} else {
      			decryptedText += text[i]
    		}
  		}
  		return decryptedText;
	}
}

module.exports = VigenereCipheringMachine;
