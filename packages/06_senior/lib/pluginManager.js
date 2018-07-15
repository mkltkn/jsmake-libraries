"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ensureRequirements_1 = require("./methods/ensureRequirements");
var getModules_1 = require("./methods/getModules");
var install_1 = require("./methods/install");
var list_1 = require("./methods/list");
var load_1 = require("./methods/load");
var loadAll_1 = require("./methods/loadAll");
var loadFile_1 = require("./methods/loadFile");
var uninstall_1 = require("./methods/uninstall");
var path = require("path");
var os = require("os");
var emitter_1 = require("evangelist/lib/emitter");
var PluginManager = (function () {
    function PluginManager(name, modulePrefix) {
        if (modulePrefix === void 0) { modulePrefix = ''; }
        var homePath = path.join(os.homedir(), "." + name);
        this.options = {
            name: name,
            modulePrefix: modulePrefix,
            homePath: homePath,
        };
        this.events = {
            install: [],
            uninstall: [],
        };
    }
    PluginManager.prototype.ensureRequirements = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, ensureRequirements_1.default(this.options)];
            });
        });
    };
    PluginManager.prototype.list = function () {
        return list_1.default(this.options);
    };
    PluginManager.prototype.install = function (moduleName) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, install_1.default(this.options, moduleName)];
                    case 1:
                        result = _a.sent();
                        if (!result.success) return [3, 3];
                        return [4, emitter_1.default(this.events, 'install', [result.moduleName])];
                    case 2:
                        _a.sent();
                        return [2, true];
                    case 3: return [2, false];
                }
            });
        });
    };
    PluginManager.prototype.uninstall = function (moduleName) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, uninstall_1.default(this.options, moduleName)];
                    case 1:
                        result = _a.sent();
                        if (!result.success) return [3, 3];
                        return [4, emitter_1.default(this.events, 'uninstall', [result.moduleName])];
                    case 2:
                        _a.sent();
                        return [2, true];
                    case 3: return [2, false];
                }
            });
        });
    };
    PluginManager.prototype.getModules = function () {
        return getModules_1.default(this.options);
    };
    PluginManager.prototype.load = function (moduleName, globals, loader) {
        if (loader === void 0) { loader = loadFile_1.default; }
        return load_1.default(this.options, moduleName, globals, loader);
    };
    PluginManager.prototype.loadAll = function (globals, loader) {
        if (loader === void 0) { loader = loadFile_1.default; }
        return loadAll_1.default(this.options, globals, loader);
    };
    return PluginManager;
}());
exports.default = PluginManager;
//# sourceMappingURL=pluginManager.js.map