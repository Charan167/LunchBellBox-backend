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
var class_validator_1 = require("class-validator");
var validate_config_1 = require("../../utils/validate-config");
var EnvironmentVariablesValidator = function () {
    var _a;
    var _DATABASE_URL_decorators;
    var _DATABASE_URL_initializers = [];
    var _DATABASE_URL_extraInitializers = [];
    var _DATABASE_TYPE_decorators;
    var _DATABASE_TYPE_initializers = [];
    var _DATABASE_TYPE_extraInitializers = [];
    var _DATABASE_HOST_decorators;
    var _DATABASE_HOST_initializers = [];
    var _DATABASE_HOST_extraInitializers = [];
    var _DATABASE_PORT_decorators;
    var _DATABASE_PORT_initializers = [];
    var _DATABASE_PORT_extraInitializers = [];
    var _DATABASE_PASSWORD_decorators;
    var _DATABASE_PASSWORD_initializers = [];
    var _DATABASE_PASSWORD_extraInitializers = [];
    var _DATABASE_NAME_decorators;
    var _DATABASE_NAME_initializers = [];
    var _DATABASE_NAME_extraInitializers = [];
    var _DATABASE_USERNAME_decorators;
    var _DATABASE_USERNAME_initializers = [];
    var _DATABASE_USERNAME_extraInitializers = [];
    var _DATABASE_SYNCHRONIZE_decorators;
    var _DATABASE_SYNCHRONIZE_initializers = [];
    var _DATABASE_SYNCHRONIZE_extraInitializers = [];
    var _DATABASE_MAX_CONNECTIONS_decorators;
    var _DATABASE_MAX_CONNECTIONS_initializers = [];
    var _DATABASE_MAX_CONNECTIONS_extraInitializers = [];
    var _DATABASE_SSL_ENABLED_decorators;
    var _DATABASE_SSL_ENABLED_initializers = [];
    var _DATABASE_SSL_ENABLED_extraInitializers = [];
    var _DATABASE_REJECT_UNAUTHORIZED_decorators;
    var _DATABASE_REJECT_UNAUTHORIZED_initializers = [];
    var _DATABASE_REJECT_UNAUTHORIZED_extraInitializers = [];
    var _DATABASE_CA_decorators;
    var _DATABASE_CA_initializers = [];
    var _DATABASE_CA_extraInitializers = [];
    var _DATABASE_KEY_decorators;
    var _DATABASE_KEY_initializers = [];
    var _DATABASE_KEY_extraInitializers = [];
    var _DATABASE_CERT_decorators;
    var _DATABASE_CERT_initializers = [];
    var _DATABASE_CERT_extraInitializers = [];
    return _a = /** @class */ (function () {
            function EnvironmentVariablesValidator() {
                this.DATABASE_URL = __runInitializers(this, _DATABASE_URL_initializers, void 0);
                this.DATABASE_TYPE = (__runInitializers(this, _DATABASE_URL_extraInitializers), __runInitializers(this, _DATABASE_TYPE_initializers, void 0));
                this.DATABASE_HOST = (__runInitializers(this, _DATABASE_TYPE_extraInitializers), __runInitializers(this, _DATABASE_HOST_initializers, void 0));
                this.DATABASE_PORT = (__runInitializers(this, _DATABASE_HOST_extraInitializers), __runInitializers(this, _DATABASE_PORT_initializers, void 0));
                this.DATABASE_PASSWORD = (__runInitializers(this, _DATABASE_PORT_extraInitializers), __runInitializers(this, _DATABASE_PASSWORD_initializers, void 0));
                this.DATABASE_NAME = (__runInitializers(this, _DATABASE_PASSWORD_extraInitializers), __runInitializers(this, _DATABASE_NAME_initializers, void 0));
                this.DATABASE_USERNAME = (__runInitializers(this, _DATABASE_NAME_extraInitializers), __runInitializers(this, _DATABASE_USERNAME_initializers, void 0));
                this.DATABASE_SYNCHRONIZE = (__runInitializers(this, _DATABASE_USERNAME_extraInitializers), __runInitializers(this, _DATABASE_SYNCHRONIZE_initializers, void 0));
                this.DATABASE_MAX_CONNECTIONS = (__runInitializers(this, _DATABASE_SYNCHRONIZE_extraInitializers), __runInitializers(this, _DATABASE_MAX_CONNECTIONS_initializers, void 0));
                this.DATABASE_SSL_ENABLED = (__runInitializers(this, _DATABASE_MAX_CONNECTIONS_extraInitializers), __runInitializers(this, _DATABASE_SSL_ENABLED_initializers, void 0));
                this.DATABASE_REJECT_UNAUTHORIZED = (__runInitializers(this, _DATABASE_SSL_ENABLED_extraInitializers), __runInitializers(this, _DATABASE_REJECT_UNAUTHORIZED_initializers, void 0));
                this.DATABASE_CA = (__runInitializers(this, _DATABASE_REJECT_UNAUTHORIZED_extraInitializers), __runInitializers(this, _DATABASE_CA_initializers, void 0));
                this.DATABASE_KEY = (__runInitializers(this, _DATABASE_CA_extraInitializers), __runInitializers(this, _DATABASE_KEY_initializers, void 0));
                this.DATABASE_CERT = (__runInitializers(this, _DATABASE_KEY_extraInitializers), __runInitializers(this, _DATABASE_CERT_initializers, void 0));
                __runInitializers(this, _DATABASE_CERT_extraInitializers);
            }
            return EnvironmentVariablesValidator;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _DATABASE_URL_decorators = [(0, class_validator_1.ValidateIf)(function (envValues) { return envValues.DATABASE_URL; }), (0, class_validator_1.IsString)()];
            _DATABASE_TYPE_decorators = [(0, class_validator_1.ValidateIf)(function (envValues) { return !envValues.DATABASE_URL; }), (0, class_validator_1.IsString)()];
            _DATABASE_HOST_decorators = [(0, class_validator_1.ValidateIf)(function (envValues) { return !envValues.DATABASE_URL; }), (0, class_validator_1.IsString)()];
            _DATABASE_PORT_decorators = [(0, class_validator_1.ValidateIf)(function (envValues) { return !envValues.DATABASE_URL; }), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(0), (0, class_validator_1.Max)(65535)];
            _DATABASE_PASSWORD_decorators = [(0, class_validator_1.ValidateIf)(function (envValues) { return !envValues.DATABASE_URL; }), (0, class_validator_1.IsString)()];
            _DATABASE_NAME_decorators = [(0, class_validator_1.ValidateIf)(function (envValues) { return !envValues.DATABASE_URL; }), (0, class_validator_1.IsString)()];
            _DATABASE_USERNAME_decorators = [(0, class_validator_1.ValidateIf)(function (envValues) { return !envValues.DATABASE_URL; }), (0, class_validator_1.IsString)()];
            _DATABASE_SYNCHRONIZE_decorators = [(0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsOptional)()];
            _DATABASE_MAX_CONNECTIONS_decorators = [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)()];
            _DATABASE_SSL_ENABLED_decorators = [(0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsOptional)()];
            _DATABASE_REJECT_UNAUTHORIZED_decorators = [(0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsOptional)()];
            _DATABASE_CA_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _DATABASE_KEY_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _DATABASE_CERT_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _DATABASE_URL_decorators, { kind: "field", name: "DATABASE_URL", static: false, private: false, access: { has: function (obj) { return "DATABASE_URL" in obj; }, get: function (obj) { return obj.DATABASE_URL; }, set: function (obj, value) { obj.DATABASE_URL = value; } }, metadata: _metadata }, _DATABASE_URL_initializers, _DATABASE_URL_extraInitializers);
            __esDecorate(null, null, _DATABASE_TYPE_decorators, { kind: "field", name: "DATABASE_TYPE", static: false, private: false, access: { has: function (obj) { return "DATABASE_TYPE" in obj; }, get: function (obj) { return obj.DATABASE_TYPE; }, set: function (obj, value) { obj.DATABASE_TYPE = value; } }, metadata: _metadata }, _DATABASE_TYPE_initializers, _DATABASE_TYPE_extraInitializers);
            __esDecorate(null, null, _DATABASE_HOST_decorators, { kind: "field", name: "DATABASE_HOST", static: false, private: false, access: { has: function (obj) { return "DATABASE_HOST" in obj; }, get: function (obj) { return obj.DATABASE_HOST; }, set: function (obj, value) { obj.DATABASE_HOST = value; } }, metadata: _metadata }, _DATABASE_HOST_initializers, _DATABASE_HOST_extraInitializers);
            __esDecorate(null, null, _DATABASE_PORT_decorators, { kind: "field", name: "DATABASE_PORT", static: false, private: false, access: { has: function (obj) { return "DATABASE_PORT" in obj; }, get: function (obj) { return obj.DATABASE_PORT; }, set: function (obj, value) { obj.DATABASE_PORT = value; } }, metadata: _metadata }, _DATABASE_PORT_initializers, _DATABASE_PORT_extraInitializers);
            __esDecorate(null, null, _DATABASE_PASSWORD_decorators, { kind: "field", name: "DATABASE_PASSWORD", static: false, private: false, access: { has: function (obj) { return "DATABASE_PASSWORD" in obj; }, get: function (obj) { return obj.DATABASE_PASSWORD; }, set: function (obj, value) { obj.DATABASE_PASSWORD = value; } }, metadata: _metadata }, _DATABASE_PASSWORD_initializers, _DATABASE_PASSWORD_extraInitializers);
            __esDecorate(null, null, _DATABASE_NAME_decorators, { kind: "field", name: "DATABASE_NAME", static: false, private: false, access: { has: function (obj) { return "DATABASE_NAME" in obj; }, get: function (obj) { return obj.DATABASE_NAME; }, set: function (obj, value) { obj.DATABASE_NAME = value; } }, metadata: _metadata }, _DATABASE_NAME_initializers, _DATABASE_NAME_extraInitializers);
            __esDecorate(null, null, _DATABASE_USERNAME_decorators, { kind: "field", name: "DATABASE_USERNAME", static: false, private: false, access: { has: function (obj) { return "DATABASE_USERNAME" in obj; }, get: function (obj) { return obj.DATABASE_USERNAME; }, set: function (obj, value) { obj.DATABASE_USERNAME = value; } }, metadata: _metadata }, _DATABASE_USERNAME_initializers, _DATABASE_USERNAME_extraInitializers);
            __esDecorate(null, null, _DATABASE_SYNCHRONIZE_decorators, { kind: "field", name: "DATABASE_SYNCHRONIZE", static: false, private: false, access: { has: function (obj) { return "DATABASE_SYNCHRONIZE" in obj; }, get: function (obj) { return obj.DATABASE_SYNCHRONIZE; }, set: function (obj, value) { obj.DATABASE_SYNCHRONIZE = value; } }, metadata: _metadata }, _DATABASE_SYNCHRONIZE_initializers, _DATABASE_SYNCHRONIZE_extraInitializers);
            __esDecorate(null, null, _DATABASE_MAX_CONNECTIONS_decorators, { kind: "field", name: "DATABASE_MAX_CONNECTIONS", static: false, private: false, access: { has: function (obj) { return "DATABASE_MAX_CONNECTIONS" in obj; }, get: function (obj) { return obj.DATABASE_MAX_CONNECTIONS; }, set: function (obj, value) { obj.DATABASE_MAX_CONNECTIONS = value; } }, metadata: _metadata }, _DATABASE_MAX_CONNECTIONS_initializers, _DATABASE_MAX_CONNECTIONS_extraInitializers);
            __esDecorate(null, null, _DATABASE_SSL_ENABLED_decorators, { kind: "field", name: "DATABASE_SSL_ENABLED", static: false, private: false, access: { has: function (obj) { return "DATABASE_SSL_ENABLED" in obj; }, get: function (obj) { return obj.DATABASE_SSL_ENABLED; }, set: function (obj, value) { obj.DATABASE_SSL_ENABLED = value; } }, metadata: _metadata }, _DATABASE_SSL_ENABLED_initializers, _DATABASE_SSL_ENABLED_extraInitializers);
            __esDecorate(null, null, _DATABASE_REJECT_UNAUTHORIZED_decorators, { kind: "field", name: "DATABASE_REJECT_UNAUTHORIZED", static: false, private: false, access: { has: function (obj) { return "DATABASE_REJECT_UNAUTHORIZED" in obj; }, get: function (obj) { return obj.DATABASE_REJECT_UNAUTHORIZED; }, set: function (obj, value) { obj.DATABASE_REJECT_UNAUTHORIZED = value; } }, metadata: _metadata }, _DATABASE_REJECT_UNAUTHORIZED_initializers, _DATABASE_REJECT_UNAUTHORIZED_extraInitializers);
            __esDecorate(null, null, _DATABASE_CA_decorators, { kind: "field", name: "DATABASE_CA", static: false, private: false, access: { has: function (obj) { return "DATABASE_CA" in obj; }, get: function (obj) { return obj.DATABASE_CA; }, set: function (obj, value) { obj.DATABASE_CA = value; } }, metadata: _metadata }, _DATABASE_CA_initializers, _DATABASE_CA_extraInitializers);
            __esDecorate(null, null, _DATABASE_KEY_decorators, { kind: "field", name: "DATABASE_KEY", static: false, private: false, access: { has: function (obj) { return "DATABASE_KEY" in obj; }, get: function (obj) { return obj.DATABASE_KEY; }, set: function (obj, value) { obj.DATABASE_KEY = value; } }, metadata: _metadata }, _DATABASE_KEY_initializers, _DATABASE_KEY_extraInitializers);
            __esDecorate(null, null, _DATABASE_CERT_decorators, { kind: "field", name: "DATABASE_CERT", static: false, private: false, access: { has: function (obj) { return "DATABASE_CERT" in obj; }, get: function (obj) { return obj.DATABASE_CERT; }, set: function (obj, value) { obj.DATABASE_CERT = value; } }, metadata: _metadata }, _DATABASE_CERT_initializers, _DATABASE_CERT_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.default = (0, config_1.registerAs)('database', function () {
    var _a;
    (0, validate_config_1.default)(process.env, EnvironmentVariablesValidator);
    return {
        isDocumentDatabase: ['mongodb'].includes((_a = process.env.DATABASE_TYPE) !== null && _a !== void 0 ? _a : ''),
        url: process.env.DATABASE_URL,
        type: process.env.DATABASE_TYPE,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT
            ? parseInt(process.env.DATABASE_PORT, 10)
            : 5432,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
        maxConnections: process.env.DATABASE_MAX_CONNECTIONS
            ? parseInt(process.env.DATABASE_MAX_CONNECTIONS, 10)
            : 100,
        sslEnabled: process.env.DATABASE_SSL_ENABLED === 'true',
        rejectUnauthorized: process.env.DATABASE_REJECT_UNAUTHORIZED === 'true',
        ca: process.env.DATABASE_CA,
        key: process.env.DATABASE_KEY,
        cert: process.env.DATABASE_CERT,
    };
});
