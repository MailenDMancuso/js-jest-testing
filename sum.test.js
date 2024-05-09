const { sum, myFunction } = require("./sum");

test("Adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

describe("Boolean values on tests", () => {
  test("falsy values are falsy", () => {
    expect(null).toBeFalsy();
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect("").toBeFalsy();
  });

  test("truthy values are truthy", () => {
    expect(true).toBeTruthy();
    expect(4).toBeTruthy();
    expect("test").toBeTruthy();
  });
});

test("throws error on invalid input", () => {
  expect(() => {
    myFunction("not number");
  }).toThrow();
});
