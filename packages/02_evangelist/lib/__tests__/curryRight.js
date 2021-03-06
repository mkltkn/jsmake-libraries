"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curryRight_1 = require("../curryRight");
test('curryRight', function () {
    var dec = function (a, b) { return a - b; };
    var decWith5 = curryRight_1.default(dec, 5);
    var result = decWith5(3);
    expect(result).toEqual(-2);
});
//# sourceMappingURL=curryRight.js.map