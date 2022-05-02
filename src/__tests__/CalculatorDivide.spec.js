import Calculator from "../js/calculator/Calculator";

describe("사직연산 나눗셈 테스트.", () => {
  test("6과 2를 나누면 3이다.", () => {
    const calc = new Calculator();
    expect(calc.divide(6, 2)).toEqual(3);
  });
});