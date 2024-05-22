const { sum } = require("../components/sum")


test('this sum function to calculate the sum of two numbers', () => {
  
    const res = sum(3,4);


    //assertion (if expected res and sum is given by fun is same then it is passed otherwise fail)
    expect(res).toBe(7);
    // expect(res).toBe(3);
})
