const charLength =(sentence)=> {
    if(!sentence){
        return 0;
    }
let count = sentence.length
return count;
}
const abc = charLength("this is a cat")
console.log(abc)

module.exports = charLength