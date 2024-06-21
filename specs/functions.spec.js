import myFunctions from "../src/functions.js";

import { expect as _expect } from "chai";
let expect = _expect;


let myFun = new myFunctions();

describe ("Srednia arytmetyczna", function () {

    it("should return 5", function () {
        expect(myFun.srednia (1,7,7)).to.be.equal(5);
    });

});

describe ("Test suite", function () {

    it("Test the add method", function () {
        expect(myFun.srednia (1,7,7)).to.be.equal(5);
    });

});