"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compose_1 = require("../compose");
test('compose', function () {
    var lower = function (x) { return x.toLowerCase(); };
    var chars = function (x) { return x.replace(/[^\w \-]+/g, ''); };
    var spaces = function (x) { return x.split(' '); };
    var dashes = function (x) { return x.join('-'); };
    var slug = compose_1.default(lower, chars, spaces, dashes);
    var result = slug('Hello World!');
    expect(result).toEqual('hello-world');
});
//# sourceMappingURL=compose.js.map