"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
/**
 * Class for calculation operations
 */
class Calculator {
    /**
     * This function sums two numbers and returns the result of the operation
     *
     * @param value1 Value for the calculation
     * @param value2 Value for the calculation
     * @returns Returns the sum of two numbers
     */
    addition(value1, value2) {
        return value1 + value2;
    }
    /**
     * This function subtracts two numbers and returns the result of the operation
     *
     * @param value1 Value for the calculation
     * @param value2 Value for the calculation
     * @returns Returns the subtraction of two numbers
     */
    subtraction(value1, value2) {
        return value1 - value2;
    }
}
exports.Calculator = Calculator;
