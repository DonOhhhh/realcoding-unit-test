import Calculator from "../js/calculator/Calculator";


describe("절댓값 판단", () => {
    test("abd에 -1을 넣으면 1을 반환한다.", () => {
        const calc = new Calculator();
        expect(calc.abs(-1)).toEqual(1);
    })
    test("abd에 3을 넣으면 3을 반환한다.", () => {
        const calc = new Calculator();
        expect(calc.abs(3)).toEqual(3);
    })
})