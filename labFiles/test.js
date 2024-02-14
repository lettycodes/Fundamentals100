const chai = require('chai');
const expect = chai.expect;

const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator', function() {
    describe('add', function() {
        it('should add two positive numbers correctly', function() {
            const result = add(1, 2);
            expect(result).to.equal(3);
        });
    });

    describe('subtract', function() {
        it('should subtract two numbers correctly', function() {
            const result = subtract(5, 2);
            expect(result).to.equal(3);
        });
    });

    describe('multiply', function() {
        it('should multiply two numbers correctly', function() {
            const result = multiply(3, 2);
            expect(result).to.equal(6);
        });
    });

    describe('divide', function() {
        it('should divide two positive numbers correctly', function() {
            const result = divide(10, 2);
            expect(result).to.equal(5);
        });

        it('should return null when dividing by zero', function() {
            const result = divide(10, 0);
            expect(result).to.be.null;
        });
    });
});