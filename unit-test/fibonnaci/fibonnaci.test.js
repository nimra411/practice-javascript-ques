const fibonnaciSeries = require('./fibonnaci')

describe('Fibonnaci series', ()=>{

    it('Fibonnaci should not be array or string or negative number', ()=>{
        expect(fibonnaciSeries('phone')).toBe("0")
        expect(fibonnaciSeries([2,3,4])).toBe("0")
        expect(fibonnaciSeries(-3)).toBe("0")
    })

    it('Fibonnaci should be number', ()=>{
        expect(fibonnaciSeries(5)).toBe("0,1,1,2,3")
    })
})