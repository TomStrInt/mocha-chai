import myFunctions from "../src/functions.js";

import { expect as _expect } from "chai";
let expect = _expect;


let myFun = new myFunctions();

describe ("Pierwsza funkcja: Srednia arytmetyczna Test 1", function () {
    context('with number arguments', function() {
       
    it("should return 5", function () {
        expect(myFun.srednia (1,7,7)).to.be.equal(5);
    });
});
});

describe ("Srednia arytmetyczna Test 2", function () {
    context('with number arguments', function() {
    it("should return 121", function () {
        expect(myFun.srednia (16,75,272)).to.be.equal(121);
    });
    });
});

describe ("Srednia arytmetyczna Test 3", function () {
    context('with number arguments', function() {
    it("should return 3", function () {
        expect(myFun.srednia (5,12,-8)).to.be.equal(3);
    });
    });
});

describe ("Srednia arytmetyczna Test 4", function () {
    context('with non-number arguments', function() {
    it("should throw error", function () {
        expect(function() {myFun.srednia ('5',77,'7')}).to.throw(TypeError, 'expects only numbers');
    });
    });
});


describe ("Druga funkcja: Sprawdzanie czy wyraz jest palindromem", function () {

    it("Should return true", function () {
        expect(myFun.palindrom ("maoam")).to.be.equal(true);
    });

});

describe ("should return false", function () {

    it("Test if word is a palindrome", function () {
        expect(myFun.palindrom ("London")).to.be.equal(false);
    });

});