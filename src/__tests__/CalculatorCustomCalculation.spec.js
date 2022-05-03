import Calculator from "../js/calculator/Calculator";


describe("가상 함수 테스트해보기", () => {
    
    test("customCalculation는 전달된 함수를 호출시킨다.", () => {
      const calc = new Calculator();
      const mockFn = jest.fn();
      calc.customCalculation(mockFn);
      expect(mockFn).toHaveBeenCalled();
    });

    test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달된 함수를 인자가 1, 2, 3을 받아 호출한다.", () => {
        const calc = new Calculator();
        const mockFn = jest.fn();
        calc.customCalculation(mockFn,1,2,3);
        expect(mockFn).toHaveBeenCalledWith(1,2,3);
    });

    test("abs함수는 Math.abs를 호출한다.", () => {
        const calc = new Calculator();
        const mockFn = jest.spyOn(Math,"abs");
        calc.customCalculation(calc.abs,-1)
        expect(mockFn).toHaveBeenCalled();
    });
  });