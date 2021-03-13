const CustomError = require("../extensions/custom-error");
                                              
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push('( )');
    }
    value = String(value);
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position != "number" || position <= 0) {
      this.chain=[];
      throw new Error("THROWN");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    if (this.chain != []) {
    this.chain.reverse();
    return this;
    }
  },
  finishChain() {
    let result = this.chain.map(el => {
      return el = `( ${el} )~~`;
    });
    this.chain=[];
    let str = result.join('');
    let strToArr = str.split('');
    delete strToArr[strToArr.length - 1];
    delete strToArr[strToArr.length - 2];
    let strAgain = strToArr.join('');
    return strAgain;
  }
};

module.exports = chainMaker;


// chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain()





