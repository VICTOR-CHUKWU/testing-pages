const {strinLength, ReverseStr, add, substarct, capitalize } = require('./index');

describe('check', () => {
    test('length of Dakfare is 7', () => {
        expect(strinLength('dakfare')).toBe(7);
      });
      test('length of D is null', () => {
        expect(strinLength('d')).toBe(null);
      });
      test('length of Dakfarevictor is null', () => {
        expect(strinLength('Dakfarevictor')).toBe(null);
      });
    
      test('reverse amen is nema', () => {
        expect(ReverseStr('amen')).toBe('nema');
      })
})

describe('check', () => {
    test('3 + 5 === 8', () => {
        expect(add(3, 5)).toBe(8);
      });
      test('10 + 5 === 5', () => {
        expect(substarct(10, 5)).toBe(5);
      });
})
describe('capital', () => {
    test('dakfare is Dakfare', () => {
        expect(capitalize('dakfare')).toBe('Dakfare');
      });
})





   
   
  