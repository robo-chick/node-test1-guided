const calculator = require("./calculator")

describe("calculator unit test", () => {
    it("adds", () => {
        expect(calculator.sum(2,2)).toBe(4)
        expect(calculator.sum(3,2)).toBe(5)
        // try it with a zero
        expect(calculator.sum(1,0)).toBe(1)
        // try it with a negative number
        expect(calculator.sum(-1,1)).toBe(0)
        // try it with a missing parameter
        expect(calculator.sum(1)).toBe(1)
        // try it with no parameters
        expect(calculator.sum()).toBe(0)
        // refactor to support more parameters
        expect(calculator.sum(2, 2, 2)).toBe(6)
        expect(calculator.sum(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45)
    })

    // TDD write the test first, then write the supporting code that makes the test pass
    it("subtracts", () => {
        expect(calculator.difference(2,2)).toBe(0)
        expect(calculator.difference(3,2)).toBe(1)
        // try it with a zero
        expect(calculator.difference(1,0)).toBe(1)
        // try it with a negative number
        expect(calculator.difference(-1,1)).toBe(-2)
        // try it with two negatives
        expect(calculator.difference(-1,-2)).toBe(1)
        // try it with a missing parameter
        expect(calculator.difference(1)).toBe(1)
        // try it with no parameters
        expect(calculator.difference()).toBe(0)
        expect(calculator.difference(2, 2, 2)).toBe(-2)
        expect(calculator.difference(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(-43)
    })

    it("multiplies", () => {
        expect(calculator.product(2,2)).toBe(4)
        expect(calculator.product(3,2)).toBe(6)
        // try it with a zero
        expect(calculator.product(1,0)).toBe(0)
        // try it with a negative number
        expect(calculator.product(-1,1)).toBe(-1)
        // try it with two negatives
        expect(calculator.product(-1,-2)).toBe(2)
        // try it with a missing parameter
        expect(calculator.product(1)).toBe(1)
        // try it with no parameters
        expect(calculator.product()).toBe(1)
        expect(calculator.product(2, 2, 2)).toBe(8)
        expect(calculator.product(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(362880)
    })

    it("divides", () => {
        expect(calculator.quotient(2,2)).toBe(1)
        expect(calculator.quotient(3,2)).toBe(1.5)
        // try it with a zero
        expect(() => calculator.quotient(1,0)).toThrow()
        // try it with a negative number
        expect(calculator.quotient(-1,1)).toBe(-1)
        // try it with a missing parameter
        expect(calculator.quotient(1)).toBe(1)
        // try it with no parameters
        expect(calculator.quotient()).toBe(0)
        expect(calculator.quotient(2, 2, 2)).toBe(0.5)
        expect(calculator.quotient(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBeLessThan(1)
    })

    it("parses", () => {
        expect(calculator.parse({
            sum: [1, 2, 3],
            difference: [3, 2, 1],
            product: [1, 2, 3],
            quotient: [2, 2, 2],
        })).toEqual({
            sum: 6,
            difference: 0,
            product: 6,
            quotient: 0.5,
        })
    })
})










