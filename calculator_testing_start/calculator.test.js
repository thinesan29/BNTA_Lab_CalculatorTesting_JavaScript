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
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 60000;
    actual = sum (10000, 50000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -60;
    actual = sum (-20, -40);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 29;
    actual = sum (29, 0);
    expect(actual).toBe(expected);
  });

});

// Subtract 

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    expected = 19;
    actual = subtract(60, 41);
    expect(actual).toBe(expected);
  });

  test('can subtract large positive numbers', () => { 
    expected = 50000;
    actual = subtract (80000, 30000);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = 500;
    actual = subtract (-100, -600);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = -7;
    actual = subtract (-7, 0);
    expect(actual).toBe(expected);
  });
});

//Multiply

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    expected = 35;
    actual = multiply(7, 5);
    expect(actual).toBe(expected);
  });

  test('can multiply large positive numbers', () => { 
    expected = 3000000000;
    actual = multiply (60000, 50000);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 100;
    actual = multiply (-25, -4);
    expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply (87, 0);
    expect(actual).toBe(expected);
  });
});

// Divide

describe('divide', () => {
  test('can divide two small positive numbers', () => {
    expected = 9;
    actual = divide(72, 8);
    expect(actual).toBe(expected);
  });

  test('can divide large positive numbers', () => { 
    expected = 2;
    actual = divide (100000, 50000);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 12;
    actual = divide (-60, -5);
    expect(actual).toBe(expected);
  });

  test('can divide zero', () => {
    expected = Infinity;
    actual = divide (25, 0);
    expect(actual).toBe(expected);
  });
});

//Modulus 

describe('modulus', () => {
  test('the modulus of two small positive numbers', () => {
    expected = 1;
    actual = modulus(19, 6);
    expect(actual).toBe(expected);
  });

  test('the modulus of two large positive numbers', () => { 
    expected = 7500;
    actual = modulus (100000, 23125);
    expect(actual).toBe(expected);
  });

  test('the modulus of zero', () => {
    expected = NaN;
    actual = modulus (45, 0);
    expect(actual).toBe(expected);
  });
});

// Even

describe('even', () => {
  test('checks a postive number and even number ', () => {
    expected = true;
    actual = even(32);
    expect(actual).toBe(expected);
  });

  test('checks a postive number and odd number ', () => {
    expected = false;
    actual = even(31);
    expect(actual).toBe(expected);
  });

  test('checks a negative number and even number ', () => {
    expected = true;
    actual = even(-26);
    expect(actual).toBe(expected);
  });

  test('checks a negative number and odd number ', () => {
    expected = false;
    actual = even(-15);
    expect(actual).toBe(expected);
  });
});

// Odd 

describe('odd', () => {
  test('checks a postive number and even number ', () => {
    expected = false;
    actual = odd(32);
    expect(actual).toBe(expected);
  });

  test('checks a postive number and odd number ', () => {
    expected = true;
    actual = odd(31);
    expect(actual).toBe(expected);
  });

  test('checks a negative number and even number ', () => {
    expected = false;
    actual = odd(-16);
    expect(actual).toBe(expected);
  });

  test('checks a negative number and odd number ', () => {
    expected = true;
    actual = odd(-15);
    expect(actual).toBe(expected);
  });
});
