const fibonnaciSeries = (count)=>{
    if(!Number.isInteger(count) || count <= 1)
        return "0"

    if(count == 2){
        return "0,1"
    }
    let num3 = 0
    let num1 = 0, num2 = 1
    let result = "0,1"
    for(let i=3; i<=count; i++){
        let num3 = num1 + num2
        num1 = num2
        num2 = num3
        result = result +","+ num3
    }
    
    return result


}
module.exports = fibonnaciSeries