const reverseNo = require('./reverse')

describe('Reverse Data', ()=>{

    describe("Reverse string",()=>{

        it('reverse the string', ()=> {
            const result = reverseNo('mobile')
            expect(result).toBe('elibom')
        })   
        it('reverse the number', ()=> {
            const result = reverseNo('12345')
            expect(result).toBe('54321')
        })     

        it('reverse the empty string', ()=> {
            const result = reverseNo('')
            expect(result).toBe(undefined)
        })

        it('reverse to no string ', ()=> {
            const result = reverseNo()
            expect(result).toBe(undefined)
        })
    })
    describe("Reverse array",()=>{

        it('reverse the array', ()=> {
            const result = reverseNo([3,7,8,12])
            expect(result).toEqual([12,8,7,3])
        })
    })

   

    
})