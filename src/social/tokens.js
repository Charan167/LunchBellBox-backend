"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tokens = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var Tokens = function () {
    var _a;
    var _token1_decorators;
    var _token1_initializers = [];
    var _token1_extraInitializers = [];
    var _token2_decorators;
    var _token2_initializers = [];
    var _token2_extraInitializers = [];
    return _a = /** @class */ (function () {
            function Tokens() {
                this.token1 = __runInitializers(this, _token1_initializers, void 0);
                this.token2 = (__runInitializers(this, _token1_extraInitializers), __runInitializers(this, _token2_initializers, void 0));
                __runInitializers(this, _token2_extraInitializers);
            }
            return Tokens;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _token1_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsNotEmpty)()];
            _token2_decorators = [(0, class_validator_1.Allow)(), (0, swagger_1.ApiProperty)()];
            __esDecorate(null, null, _token1_decorators, { kind: "field", name: "token1", static: false, private: false, access: { has: function (obj) { return "token1" in obj; }, get: function (obj) { return obj.token1; }, set: function (obj, value) { obj.token1 = value; } }, metadata: _metadata }, _token1_initializers, _token1_extraInitializers);
            __esDecorate(null, null, _token2_decorators, { kind: "field", name: "token2", static: false, private: false, access: { has: function (obj) { return "token2" in obj; }, get: function (obj) { return obj.token2; }, set: function (obj, value) { obj.token2 = value; } }, metadata: _metadata }, _token2_initializers, _token2_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.Tokens = Tokens;
