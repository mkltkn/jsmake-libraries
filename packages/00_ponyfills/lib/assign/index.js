"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assignPolyfill(target, ...sources) {
    for (const source of sources) {
        for (const key of Object.getOwnPropertyNames(source)) {
            target[key] = source[key];
        }
    }
    return target;
}
exports.assignPolyfill = assignPolyfill;
exports.assign = (Object.assign !== undefined) ? Object.assign : assignPolyfill;
exports.default = exports.assign;
//# sourceMappingURL=index.js.map