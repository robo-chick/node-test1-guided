// take all the parameters passed to the function, no matter how many,
// and make them available as an array in 'values'
function sum(...values) {
    return values.reduce((a, b) => a + b, 0) 
}

function difference(...values) {
    return values.slice(1).reduce((a, b) => a - b, values[0] || 0)
}

function product(...values) {
    return values.reduce((a, b) => a * b, 1)
}

function quotient(...values) {
    if (values.slice(1).indexOf(0) > -1) {
        throw new Error("Cannot divide by zero")
    }
    return values.slice(1).reduce((a, b) => a/b, values[0] || 0)
}

function parse(data) {
    const result = {}

    // check that values not only exist, but are also arrays
    if (Array.isArray(data.sum)) {
        // spread before sending since data.sum is an array,
        // and the 'sum' function expects a list of parameters
        result.sum = sum(...data.sum)
    }
    if (Array.isArray(data.difference)) {
        result.difference = difference(...data.difference)
    }
    if (Array.isArray(data.product)) {
        result.product = product(...data.product)
    }
    if (Array.isArray(data.quotient)) {
        result.quotient = quotient(...data.quotient)
    }

    return result
}

module.exports = {
    sum,
    difference,
    product, 
    quotient,
    parse,
}