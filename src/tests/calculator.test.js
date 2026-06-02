const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add floating point numbers', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract resulting in negative', () => {
      expect(subtract(3, 10)).toBe(-7);
    });

    test('should subtract zero', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('should subtract floating point numbers', () => {
      expect(subtract(10.5, 4.3)).toBeCloseTo(6.2);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(10, -5)).toBe(-50);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-3, -4)).toBe(12);
    });

    test('should multiply floating point numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide positive and negative numbers', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('should divide resulting in decimal', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => divide(-5, 0)).toThrow('Cannot divide by zero');
    });

    test('should divide one by a number', () => {
      expect(divide(1, 4)).toBe(0.25);
    });
  });

  describe('Integration Tests', () => {
    test('should handle example operations from image: 2 + 3', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should handle example operations from image: 10 - 4', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should handle example operations from image: 45 * 2', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should handle example operations from image: 20 / 5', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });
});
