import Operation from '../service/ArithmaticOperations';

test('subtract two intergers', ()=>{
 expect(Operation.subtract(2,3)).toBe(-1)
});

test('subtract two floats', () => {
 expect(Operation.subtract(2.30,1.20)).toBe(1.1)
 expect(Operation.subtract(.01, 1.01)).toBe(1);
})

test('two objects are nieghter float or ints', ()=>{
 expect(Operation.subtract('2',1)).toBe(null)
})

