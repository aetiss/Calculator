
import Operation from '../service/ArithmaticOperations';
// const add = jest.fn(() => 5);
test('Add two integers', () => {
 expect(Operation.add(2,3)).toBe(5);
 expect(Operation.add(1,-1)).toBe(0);
});

test('Add two floats', () => {
 expect(Operation.add(2.5,0.3)).toBe(2.8);
 expect(Operation.add(.01,1.0)).toBe(1.01);
});

test('Add two object which are neither ints nor floats', () => {
 expect(Operation.add('2',3)).toBe(null);
 expect(Operation.add('2','3')).toBe(null);
 expect(Operation.add("2",'3')).toBe(null);
});

test('Add two object which are neither ints nor floats', () => {
 expect(Operation.add('2',3)).toBe(null);
 expect(Operation.add(null,3)).toBe(null);
});




