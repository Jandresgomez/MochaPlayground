const expect = require('chai').expect;
const operations = require('./Operations.js');

describe("Operations #multiply() tests", function() {

    context('Multiplying positive numbers', function() {
        it('Should return a positive number', function(done) {
            expect(operations.multiply(10,10)).to.be.greaterThan(0);
            done();
        });
    });

    context('Multiplying negative numbers', function() {
        it('Should return a positive number', function(done) {
            expect(operations.multiply(-20,-20)).to.be.greaterThan(0);
            done();
        });
    });

    context('Multiplying both positive and negative numbers', function() {
        it('Should return a negative number', function(done) {
            expect(operations.multiply(-10,10)).to.be.lessThan(0);
            done();
        });
    });
});

describe("Operations #sum() tests", function() {

    context('adding a number to itself', function() {
        it('Should return a number*2', function(done) {
            expect(operations.sum(10,10)).to.equal(operations.multiply(10,2));
            done();
        });
    });
});