const primeNumberCheck = require("./primeNumberCheck")

describe('Prime number', () => {
    
    it('Prime number should not be an array or string', () => {
        expect(primeNumberCheck([9,10,11])).toBe(false)
        expect(primeNumberCheck("testing")).toBe(false)
    })

    it("Prime number can't be 1 or below", () => {
        expect(primeNumberCheck(1)).toBe(false)
        expect(primeNumberCheck(0)).toBe(false)
        expect(primeNumberCheck(0.5)).toBe(false)
    })

    it('Prime number should be divisible by only 1', () => {
        expect(primeNumberCheck(2)).toBe(2)
    })

    it('Number divisible by another number, including 1', () =>{
        expect(primeNumberCheck(10)).toBe("composite number")
    })
})