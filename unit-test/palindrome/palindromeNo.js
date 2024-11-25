const reverseNo = require("../reverse-array/reverse");

const findPalindrome = (orignalNum)=> {
    if(!Number.isInteger(orignalNum) || orignalNum < 0 ){
        return  false;
    
    }
    let reverseNum = reverseNo(orignalNum)
    
    if(reverseNum == orignalNum) {
        return true;
    }
    console.log('after reverse', reverseNum)
 return false;
}

 module.exports = findPalindrome;