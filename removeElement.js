const arr = [3,2,4,6,4,9,7];
const findMinMax = (arr)=>{
 let min=arr[0];
 let max=0;
 for(let i=0;i<arr.length;i++){
    if(arr[i]<min)
        min = arr[i];

    if (arr[i]>max)
        max = arr[i];
  }
 


    return {min,max} ;
}

const data = findMinMax(arr)
console.log("data",data)