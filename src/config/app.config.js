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
var config_1 = require("@nestjs/config");
var validate_config_1 = require(".././utils/validate-config");
var class_validator_1 = require("class-validator");
var Environment;
(function (Environment) {
    Environment["Development"] = "development";
    Environment["Production"] = "production";
    Environment["Test"] = "test";
})(Environment || (Environment = {}));
var EnvironmentVariablesValidator = function () {
    var _a;
    var _NODE_ENV_decorators;
    var _NODE_ENV_initializers = [];
    var _NODE_ENV_extraInitializers = [];
    var _APP_PORT_decorators;
    var _APP_PORT_initializers = [];
    var _APP_PORT_extraInitializers = [];
    var _FRONTEND_DOMAIN_decorators;
    var _FRONTEND_DOMAIN_initializers = [];
    var _FRONTEND_DOMAIN_extraInitializers = [];
    var _BACKEND_DOMAIN_decorators;
    var _BACKEND_DOMAIN_initializers = [];
    var _BACKEND_DOMAIN_extraInitializers = [];
    var _API_PREFIX_decorators;
    var _API_PREFIX_initializers = [];
    var _API_PREFIX_extraInitializers = [];
    var _APP_FALLBACK_LANGUAGE_decorators;
    var _APP_FALLBACK_LANGUAGE_initializers = [];
    var _APP_FALLBACK_LANGUAGE_extraInitializers = [];
    var _APP_HEADER_LANGUAGE_decorators;
    var _APP_HEADER_LANGUAGE_initializers = [];
    var _APP_HEADER_LANGUAGE_extraInitializers = [];
    return _a = /** @class */ (function () {
            function EnvironmentVariablesValidator() {
                this.NODE_ENV = __runInitializers(this, _NODE_ENV_initializers, void 0);
                this.APP_PORT = (__runInitializers(this, _NODE_ENV_extraInitializers), __runInitializers(this, _APP_PORT_initializers, void 0));
                this.FRONTEND_DOMAIN = (__runInitializers(this, _APP_PORT_extraInitializers), __runInitializers(this, _FRONTEND_DOMAIN_initializers, void 0));
                this.BACKEND_DOMAIN = (__runInitializers(this, _FRONTEND_DOMAIN_extraInitializers), __runInitializers(this, _BACKEND_DOMAIN_initializers, void 0));
                this.API_PREFIX = (__runInitializers(this, _BACKEND_DOMAIN_extraInitializers), __runInitializers(this, _API_PREFIX_initializers, void 0));
                this.APP_FALLBACK_LANGUAGE = (__runInitializers(this, _API_PREFIX_extraInitializers), __runInitializers(this, _APP_FALLBACK_LANGUAGE_initializers, void 0));
                this.APP_HEADER_LANGUAGE = (__runInitializers(this, _APP_FALLBACK_LANGUAGE_extraInitializers), __runInitializers(this, _APP_HEADER_LANGUAGE_initializers, void 0));
                __runInitializers(this, _APP_HEADER_LANGUAGE_extraInitializers);
            }
            return EnvironmentVariablesValidator;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _NODE_ENV_decorators = [(0, class_validator_1.IsEnum)(Environment), (0, class_validator_1.IsOptional)()];
            _APP_PORT_decorators = [(0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(0), (0, class_validator_1.Max)(65535), (0, class_validator_1.IsOptional)()];
            _FRONTEND_DOMAIN_decorators = [(0, class_validator_1.IsUrl)({ require_tld: false }), (0, class_validator_1.IsOptional)()];
            _BACKEND_DOMAIN_decorators = [(0, class_validator_1.IsUrl)({ require_tld: false }), (0, class_validator_1.IsOptional)()];
            _API_PREFIX_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _APP_FALLBACK_LANGUAGE_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _APP_HEADER_LANGUAGE_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _NODE_ENV_decorators, { kind: "field", name: "NODE_ENV", static: false, private: false, access: { has: function (obj) { return "NODE_ENV" in obj; }, get: function (obj) { return obj.NODE_ENV; }, set: function (obj, value) { obj.NODE_ENV = value; } }, metadata: _metadata }, _NODE_ENV_initializers, _NODE_ENV_extraInitializers);
            __esDecorate(null, null, _APP_PORT_decorators, { kind: "field", name: "APP_PORT", static: false, private: false, access: { has: function (obj) { return "APP_PORT" in obj; }, get: function (obj) { return obj.APP_PORT; }, set: function (obj, value) { obj.APP_PORT = value; } }, metadata: _metadata }, _APP_PORT_initializers, _APP_PORT_extraInitializers);
            __esDecorate(null, null, _FRONTEND_DOMAIN_decorators, { kind: "field", name: "FRONTEND_DOMAIN", static: false, private: false, access: { has: function (obj) { return "FRONTEND_DOMAIN" in obj; }, get: function (obj) { return obj.FRONTEND_DOMAIN; }, set: function (obj, value) { obj.FRONTEND_DOMAIN = value; } }, metadata: _metadata }, _FRONTEND_DOMAIN_initializers, _FRONTEND_DOMAIN_extraInitializers);
            __esDecorate(null, null, _BACKEND_DOMAIN_decorators, { kind: "field", name: "BACKEND_DOMAIN", static: false, private: false, access: { has: function (obj) { return "BACKEND_DOMAIN" in obj; }, get: function (obj) { return obj.BACKEND_DOMAIN; }, set: function (obj, value) { obj.BACKEND_DOMAIN = value; } }, metadata: _metadata }, _BACKEND_DOMAIN_initializers, _BACKEND_DOMAIN_extraInitializers);
            __esDecorate(null, null, _API_PREFIX_decorators, { kind: "field", name: "API_PREFIX", static: false, private: false, access: { has: function (obj) { return "API_PREFIX" in obj; }, get: function (obj) { return obj.API_PREFIX; }, set: function (obj, value) { obj.API_PREFIX = value; } }, metadata: _metadata }, _API_PREFIX_initializers, _API_PREFIX_extraInitializers);
            __esDecorate(null, null, _APP_FALLBACK_LANGUAGE_decorators, { kind: "field", name: "APP_FALLBACK_LANGUAGE", static: false, private: false, access: { has: function (obj) { return "APP_FALLBACK_LANGUAGE" in obj; }, get: function (obj) { return obj.APP_FALLBACK_LANGUAGE; }, set: function (obj, value) { obj.APP_FALLBACK_LANGUAGE = value; } }, metadata: _metadata }, _APP_FALLBACK_LANGUAGE_initializers, _APP_FALLBACK_LANGUAGE_extraInitializers);
            __esDecorate(null, null, _APP_HEADER_LANGUAGE_decorators, { kind: "field", name: "APP_HEADER_LANGUAGE", static: false, private: false, access: { has: function (obj) { return "APP_HEADER_LANGUAGE" in obj; }, get: function (obj) { return obj.APP_HEADER_LANGUAGE; }, set: function (obj, value) { obj.APP_HEADER_LANGUAGE = value; } }, metadata: _metadata }, _APP_HEADER_LANGUAGE_initializers, _APP_HEADER_LANGUAGE_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.default = (0, config_1.registerAs)('app', function () {
    var _a;
    (0, validate_config_1.default)(process.env, EnvironmentVariablesValidator);
    return {
        nodeEnv: process.env.NODE_ENV || 'development',
        name: process.env.APP_NAME || 'app',
        workingDirectory: process.env.PWD || process.cwd(),
        frontendDomain: process.env.FRONTEND_DOMAIN,
        backendDomain: (_a = process.env.BACKEND_DOMAIN) !== null && _a !== void 0 ? _a : 'http://localhost',
        port: process.env.APP_PORT
            ? parseInt(process.env.APP_PORT, 10)
            : process.env.PORT
                ? parseInt(process.env.PORT, 10)
                : 3000,
        apiPrefix: process.env.API_PREFIX || 'api',
        fallbackLanguage: process.env.APP_FALLBACK_LANGUAGE || 'en',
        headerLanguage: process.env.APP_HEADER_LANGUAGE || 'x-custom-lang',
    };
});
