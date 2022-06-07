const {getSumOfArray, getAverageOfArray, getPositiveNumbers, divisibleByTwo, reverseString} = require("./challenge")


test("should return the sum of an array", () => {
    const array = [1,2,3,4]
    expect(getSumOfArray(array)).toEqual(10);
});

test("should return average of an array", () => {
    const array = [1,2,3,4]
    expect(getAverageOfArray(array)).toEqual(2.5);
})

test("should return average of an array", () => {
    const array = [1,2,3,4]
    expect(getAverageOfArray(array)).not.toEqual(3);
})

test('should return only the positive numbers', () => {
    const array = [-1,-2,1,2,3,4]
    expect(getPositiveNumbers(array)).toBeGreaterThan[1,2,3,4];
});

test('should return true if divisible by two', () => {
    divisibleByTwo()
    expect(divisibleByTwo).toBeTruthy;
});


