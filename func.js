// function abc(){

//     console.log("in - abc")
// }
console.log("func file");

const arrowFunc = (first, last)=>{
    console.log("in func file in function");
    
    console.log("name", first)
    console.log("rol",last)

    return first + " " + last
}
console.log(" after func file");


module.exports = arrowFunc
// abc()
