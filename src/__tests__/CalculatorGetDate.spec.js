import Calculator from "../js/calculator/Calculator";



describe("음수 양수 판단", () => {
    test("getDate를 하면 Date객체가 나온다.", () => {
        const calc = new Calculator();
        expect(calc.getDate()).toBeInstanceOf(Date);
    })
})