var IbScan = require("nativescript-ib-scan").IbScan;
var ibScan = new IbScan();

describe("greet function", function () {
    it("exists", function () {
        expect(ibScan.greet).toBeDefined();
    });

    it("returns a string", function () {
        expect(ibScan.greet()).toEqual("Hello, NS");
    });
});