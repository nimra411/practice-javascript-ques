const character = require('./charLength')
// it take two parameter
// first for test description
// second for test logic

describe("Test Character Length", ()=>{
    it('count of sentence/word', () => {
        const result  = character("this")
        expect(result).toBe(4)
    } )
  
    it("checks character count of empty string", () =>{
        const result1 = character("")
        expect(result1).toBe(0)
    })

    it("check character with no string", () => {
        const result2 = character()
        expect(result2).toBe(0)
    })
})