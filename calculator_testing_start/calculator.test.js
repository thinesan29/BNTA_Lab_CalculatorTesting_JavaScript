const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

//Add

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    const expected = 5;
    const actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    const expected = 60000;
    const actual = sum (10000, 50000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    const expected = -60;
    const actual = sum (-20, -40);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    const expected = 29;
    const actual = sum (29, 0);
    expect(actual).toBe(expected);
  });

});

// Subtract 

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    const expected = 19;
    const actual = subtract(60, 41);
    expect(actual).toBe(expected);
  });

  test('can subtract large positive numbers', () => { 
    const expected = 50000;
    const actual = subtract (80000, 30000);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    const expected = 500;
    const actual = subtract (-100, -600);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    const expected = -7;
    const actual = subtract (-7, 0);
    expect(actual).toBe(expected);
  });
});

//Multiply

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    const expected = 35;
    const actual = multiply(7, 5);
    expect(actual).toBe(expected);
  });

  test('can multiply large positive numbers', () => { 
    const expected = 3000000000;
    const actual = multiply (60000, 50000);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    const expected = 100;
    const actual = multiply (-25, -4);
    expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    const expected = 0;
    const actual = multiply (87, 0);
    expect(actual).toBe(expected);
  });
});

// Divide

describe('divide', () => {
  test('can divide two small positive numbers', () => {
    const expected = 9;
    const actual = divide(72, 8);
    expect(actual).toBe(expected);
  });

  test('can divide large positive numbers', () => { 
    const expected = 2;
    const actual = divide (100000, 50000);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    const expected = 12;
    const actual = divide (-60, -5);
    expect(actual).toBe(expected);
  });

  test('can divide zero', () => {
    const expected = Infinity;
    const actual = divide (25, 0);
    expect(actual).toBe(expected);
  });
});

//Modulus 

describe('modulus', () => {
  test('the modulus of two small positive numbers', () => {
    const expected = 1;
    const actual = modulus(19, 6);
    expect(actual).toBe(expected);
  });

  test('the modulus of two large positive numbers', () => { 
    const expected = 7500;
    const actual = modulus (100000, 23125);
    expect(actual).toBe(expected);
  });

  test('the modulus of zero', () => {
    const expected = NaN;
    const actual = modulus (45, 0);
    expect(actual).toBe(expected);
  });
});

// Even

describe('even', () => {
  test('checks a postive number and even number ', () => {
    const expected = true;
    const actual = even(32);
    expect(actual).toBe(expected);
  });

  test('checks a postive number and odd number ', () => {
    const expected = false;
    const actual = even(31);
    expect(actual).toBe(expected);
  });

  test('checks a negative number and even number ', () => {
    const expected = true;
    const actual = even(-26);
    expect(actual).toBe(expected);
  });

  test('checks a negative number and odd number ', () => {
    const expected = false;
    const actual = even(-15);
    expect(actual).toBe(expected);
  });
});

// Odd 

describe('odd', () => {
  test('checks a postive number and even number ', () => {
    const expected = false;
    const actual = odd(32);
    expect(actual).toBe(expected);
  });

  test('checks a postive number and odd number ', () => {
    const expected = true;
    const actual = odd(31);
    expect(actual).toBe(expected);
  });

  test('checks a negative number and even number ', () => {
    const expected = false;
    const actual = odd(-16);
    expect(actual).toBe(expected);
  });

  test('checks a negative number and odd number ', () => {
    const expected = true;
    const actual = odd(-15);
    expect(actual).toBe(expected);
  });
});
