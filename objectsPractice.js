// const student = {name:"nimra", rol:"ned"};

// console.log("Before Process", student)
// student.name = "nimra"
// student.rol = "roll"
// student.subjects = ["math", "eng"]
// student.subjects = "eng"
// student.test = ()=>{
//     console.log("working")
//     return "testing"
// }
// delete student.rol
// console.log("After Process", student)


// ----------------

// const products = [
//     {
//         id:"1",
//         merchantID:"test",
//         name:"Cerelac"
//     },
//     {
//         id:"2",
//         merchantID:"test",
//         name:"tissue"
//     },
//     {
//         id:"3",
//         merchantID:"alpha",
//         name:"bottle"
//     },
// ]


// const productbyMerchant = {}
// console.log("Before Process", productbyMerchant);

// products.forEach((product)=>{
//     productbyMerchant[product.merchantID] = [...productbyMerchant[product.merchantID] ?? [], product]
// })
// console.log("test",productbyMerchant.test)
// console.log("alpha",productbyMerchant["alpha"])
// console.log("after Process", JSON.stringify(productbyMerchant));

// console.log("----------");

// var arr  = [1,2,3]
// var newNumbr = 5

// var temp  = [...arr] 
// temp[0] = 5
// console.log("temp", temp, "arr", arr);



// ---------------


let obj = {name:"test", roll:"ned"} 

console.log("test",obj);
let newObj = {...obj, test:"test"}
console.log("test",newObj, "obj", obj);
