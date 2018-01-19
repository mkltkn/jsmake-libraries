"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function splitArray(instance, n) {
    const offset = (n >= 0) ? n : instance.length + n;
    return {
        items: instance.slice(0, offset),
        rest: instance.slice(offset),
    };
}
exports.default = splitArray;
//# sourceMappingURL=splitArray.js.map