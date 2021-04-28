const lib = require("../lib");

describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Tom");
    expect(result).toContain("Tom");
  });
});

describe("getCurrencies", () => {
  it("Should return supported currencies", () => {
    const result = lib.getCurrencies();

    // too general
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // too specific
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("CAD");
    expect(result[2]).toBe("EUR");

    // proper way
    expect(result).toContain("USD");
    expect(result).toContain("CAD");
    expect(result).toContain("EUR");

    // IDEAL WAY
    expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "CAD"]));
  });
});

describe("getProduct", () => {
  it("Should return the product with given id", () => {
    const result = lib.getProduct(1);
    // should have the same items, if result has another like category, itl fail
    expect(result).toEqual({ id: 1, price: 10 });

    // if have these two items, fine
    expect(result).toMatchObject({ id: 1, price: 10 });

    expect(result).toHaveProperty('id', 1);
  });
});
