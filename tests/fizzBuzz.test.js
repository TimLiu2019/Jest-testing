const lib = require("../fizzBuzz");

describe("fizzBuzz", () => {
  it("If input is not a number", () => {
    expect(() => {
      lib.fizzBuzz("n");
    }).toThrow();
    expect(() => {
      lib.fizzBuzz(null);
    }).toThrow();
    expect(() => {
      lib.fizzBuzz(undefined);
    }).toThrow();
    expect(() => {
      lib.fizzBuzz({});
    }).toThrow();
  });

  it("Input can be divisible by 3 and 5", () => {
    const result = lib.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("Input can be only divisible by 3 ", () => {
    const result = lib.fizzBuzz(3);
    expect(result).toBe("Fizz");
  });

  it("Input can be only divisible by 5 ", () => {
    const result = lib.fizzBuzz(5);
    expect(result).toBe("Buzz");
  });
});
