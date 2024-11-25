const findPalindrome = require('./palindromeNo')

describe(' palindrome for number', ()=> {
    
    it('Find palindrome for number', ()=> {
        const palRes = findPalindrome(121)
        expect(palRes).toBeTruthy()
    })

    it('Find palindrome for wrong number', ()=> {
        const palRes = findPalindrome(-121)
        expect(palRes).toBeFalsy() 
    })

    it('Find palindrome of string', ()=> {
        const palRes = findPalindrome("madam")
        expect(palRes).toBeFalsy()
    })

    it("Find palindrome of 2 numbers", ()=> {
        const palRes = findPalindrome(24)
        expect(palRes).toBeFalsy()
    })

    it("Find palindrome of 2 same numbers", ()=> {
        const palRes = findPalindrome(22)
        expect(palRes).toBeTruthy()
    })
})