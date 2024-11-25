/* Have the function SearchingChallenge(str) take the str parameter being passed,
which will contain only alphabetic characters and spaces, and return the first non-repeating charater.
For example: if str is "agettkgaeee" then your program should return k.
The string will always contain at least one character and there will always be at least one non-repeating character. */

const searchingChallenge = (str) => {
    
    let chars = {}
    if(str=== Number.isInteger)
    return 0;

    if (str.length===1)
        return str;

    for(let i=0; i<str.length; i++)
        for(let j=1; j<str.length; j++)
    {
        if(str[i]!==str[j])
        {
            chars = str[i]
        }
    }
}
 
console.log(searchingChallenge("agettkgaeee"))