"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeFirstMatchFromObject_1 = require("../removeFirstMatchFromObject");
test('removeFirstMatchFromObject', function () {
    var obj1 = { a: 1, f: 5, b: 2, c: 3, d: 4, e: 5 };
    var func1 = function (x) { return x === 5; };
    var result = removeFirstMatchFromObject_1.default(obj1, func1);
    expect(result).not.toBe(obj1);
    expect(Object.keys(result)).toHaveLength(5);
    expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 });
});
//# sourceMappingURL=removeFirstMatchFromObject.js.map