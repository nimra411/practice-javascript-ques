const primeNumberCheck = (n) => {

    if(!Number.isInteger(n) || Array.isArray(n))
        return false
    
    if(n <= 1)
        return false

    for(let i=2; i<=Math.sqrt(n); i++){
        if(n % i === 0)
            return "composite number"
    }

    return n
}

module.exports = primeNumberCheck