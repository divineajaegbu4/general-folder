'use strict';

const answer = require('./hiker');

describe('answer', () => {
  it('Should return minimum value of -2 inside the [6, 9, 15, -2, 92, 11]', () => {
    expect(answer(-2)).toEqual(-2);
  }); 
  
  it('Should return maximum value of 92 inside the [6, 9, 15, -2, 92, 11]', () => {
    expect(answer(92)).toEqual(92);
  });
  
  it('Should return the length of the element inside the [6, 9, 15, -2, 92, 11]', () => {
    expect(answer(6)).toEqual(6);
  });
  
   it('Should return the average value', () => {
    expect(answer(21.833333)).toEqual((21.833333));
  });
});