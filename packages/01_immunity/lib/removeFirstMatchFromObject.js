"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assign_1 = require("ponyfills/lib/assign");
function removeFirstMatchFromObject(instance, predicate) {
    var notFound = true;
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (notFound && predicate(instance[itemKey], itemKey, obj)) {
            notFound = false;
            return obj;
        }
        return assign_1.default({}, obj, (_a = {},
            _a[itemKey] = instance[itemKey],
            _a));
    }, {});
}
exports.default = removeFirstMatchFromObject;
//# sourceMappingURL=removeFirstMatchFromObject.js.map