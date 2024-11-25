// Given an unsorted array of integers, find the third largest number in the array. 
// If the array has less than three distinct numbers, return the largest number.
// Example:
// Input: arr = [2, 4, 1, 5, 3, 6]
// Output: 4

const arr = [2, 4, 1, 5, 3, 6]

const findTl = (arr)=> {
    const unSortedArr = [...arr]

for(let j=0; j<unSortedArr.length; j++){
    
    for(let i=0; i<unSortedArr.length-j; i++){
    let temp = 0;
    if (unSortedArr[i] > unSortedArr[i+1]){
        temp = unSortedArr[i]
        unSortedArr[i] = unSortedArr[i+1]
        unSortedArr[i+1] = temp
        
    }
}
}
if(unSortedArr.length < 3){
    return unSortedArr[unSortedArr.length-1]
}
else {
return unSortedArr[unSortedArr.length-3]
}
}

const thirdLarge = findTl(arr)
console.log(thirdLarge)

// -----------------
// const arr1 = [2,3,4,2,1]
// const func = ()=>{
// let largest= 0;
// let secondLarget = 0 ;
// let thirdLarget = 0; 
//     for (let index = 0; index < array.length; index++) {
//         if ()
        
        
//     }
// }