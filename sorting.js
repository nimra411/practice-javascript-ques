const arr = [3,4,9,6,4,2,6]

const sortarr =()=>{
for(let i=0; i<arr.length; i++){
console.log("iteration", i)

    for(let j=0; j<arr.length - i; j++) {
        let temp = 0;
        if (arr[j]>arr[j+1]){
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
         }

    }
    
}
console.log("arr",arr);
return arr;
}

const sortarrResult = sortarr(arr)

// iteration 1
// [3,4,9,6,4,2,6]
// [3,4,6,9,4,2,6]
// [3,4,6,4,9,2,6]
// [3,4,6,4,2,9,6]
// [3,4,6,4,2,6,9]
// iteration 2
// [3,4,4,6,2,6,9]
// [3,4,4,2,6,6,9]
// [3,4,4,2,6,6,9]

