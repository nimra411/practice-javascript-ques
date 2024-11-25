const arr = [4,3,6,12,3,6,2,8];

const customIncludes = (tarr, el)=>{

    let isDuplicate = false;
    for(let i=0; i<tarr.length; i++)
    {
        if(tarr[i] == el)
        {
            isDuplicate = true;
            break;
        }
        
    }
    return isDuplicate
}
const removeDuplicates =()=>{
    const newarr = []
    
    for(let i=0; i<arr.length; i++){
        // const isDuplicate = newarr.includes(arr[i])
        const isDuplicate = customIncludes(newarr,arr[i])
        if(!isDuplicate){
            newarr.push(arr[i])
        }
    }



    return newarr
}
const result = removeDuplicates()
console.log("Result-> min is", result)