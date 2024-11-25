// const { describe } = require('mocha')
const factorialOfNumber = require('./factorialOfNumber')
// const { expect } = require('chai')

describe('Factorial Of A Number', ()=> {

    it('Factorial cannot be an array or string', ()=>{
        expect(factorialOfNumber([2,4,5])).toBe(1)
        expect(factorialOfNumber('testing')).toBe(1)
    })

    it('Factorial should be number', ()=>{
        expect(factorialOfNumber(5)).toBe(120)
    })
}
)