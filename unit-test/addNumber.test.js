const addNumber = require('./addNumber')

test("Add two number", ()=>{
    expect(addNumber(2,2)).toBe(4)
})