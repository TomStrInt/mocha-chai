import myFunctions from "../src/functions.js";

import { expect as _expect } from "chai";
let expect = _expect;


let myFun = new myFunctions();

describe ("Srednia arytmetyczna Test 1", function () {

    it("should return 5", function () {
        expect(myFun.srednia (1,7,7)).to.be.equal(5);
    });

});

describe ("Srednia arytmetyczna Test 2", function () {

    it("should return 121", function () {
        expect(myFun.srednia (16,75,272)).to.be.equal(121);
    });

});

describe ("Srednia arytmetyczna Test 3", function () {

    it("should return 3", function () {
        expect(myFun.srednia (5,12,-8)).to.be.equal(3);
    });

});


describe ("should return true", function () {

    it("Test if word is a palindrome", function () {
        expect(myFun.palindrom ("maoam")).to.be.equal(true);
    });

});

describe ("should return false", function () {

    it("Test if word is a palindrome", function () {
        expect(myFun.palindrom ("London")).to.be.equal(false);
    });

});