"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeKeyFromObject_1 = require("../removeKeyFromObject");
test('removeKeyFromObject', function () {
    var arr1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    var val1 = 'b';
    var val2 = 'c';
    var result = removeKeyFromObject_1.default(arr1, val1, val2);
    expect(result).not.toBe(arr1);
    expect(Object.keys(result)).toHaveLength(3);
    expect(result).toEqual({ a: 1, d: 4, e: 5 });
});
//# sourceMappingURL=removeKeyFromObject.js.map