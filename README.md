### Unit Tesing with JEST

### 1 Test throw

Use a callback:
it("If input is not a number", () => {
expect(() => {
fizzBuzz.fizzBuzz("n");
}).toThrow();
});

### 2 Test throw and arrays

Use forEach:
const args = [null, undefined, NaN, "", 0, false];
args.forEach(a => {
expect(() => {
lib.registerUser(a);
}).toThrow();
});
