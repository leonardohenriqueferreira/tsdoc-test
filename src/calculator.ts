/**
 * Class for calculation operations
 */
export class Calculator {

  /**
   * This function sums two numbers and returns the result of the operation
   * 
   * @param value1 Value for the calculation
   * @param value2 Value for the calculation
   * @returns Returns the sum of two numbers
   */
  public addition(value1: number, value2: number): number {
    return value1 + value2;
  }

  /**
   * This function subtracts two numbers and returns the result of the operation
   * 
   * @param value1 Value for the calculation
   * @param value2 Value for the calculation
   * @returns Returns the subtraction of two numbers
   */
  public subtraction(value1: number, value2: number): number {
    return value1 - value2;
  }

}
