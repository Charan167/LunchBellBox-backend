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
    var _MAIL_PORT_decorators;
    var _MAIL_PORT_initializers = [];
    var _MAIL_PORT_extraInitializers = [];
    var _MAIL_HOST_decorators;
    var _MAIL_HOST_initializers = [];
    var _MAIL_HOST_extraInitializers = [];
    var _MAIL_USER_decorators;
    var _MAIL_USER_initializers = [];
    var _MAIL_USER_extraInitializers = [];
    var _MAIL_PASSWORD_decorators;
    var _MAIL_PASSWORD_initializers = [];
    var _MAIL_PASSWORD_extraInitializers = [];
    var _MAIL_DEFAULT_EMAIL_decorators;
    var _MAIL_DEFAULT_EMAIL_initializers = [];
    var _MAIL_DEFAULT_EMAIL_extraInitializers = [];
    var _MAIL_DEFAULT_NAME_decorators;
    var _MAIL_DEFAULT_NAME_initializers = [];
    var _MAIL_DEFAULT_NAME_extraInitializers = [];
    var _MAIL_IGNORE_TLS_decorators;
    var _MAIL_IGNORE_TLS_initializers = [];
    var _MAIL_IGNORE_TLS_extraInitializers = [];
    var _MAIL_SECURE_decorators;
    var _MAIL_SECURE_initializers = [];
    var _MAIL_SECURE_extraInitializers = [];
    var _MAIL_REQUIRE_TLS_decorators;
    var _MAIL_REQUIRE_TLS_initializers = [];
    var _MAIL_REQUIRE_TLS_extraInitializers = [];
    return _a = /** @class */ (function () {
            function EnvironmentVariablesValidator() {
                this.MAIL_PORT = __runInitializers(this, _MAIL_PORT_initializers, void 0);
                this.MAIL_HOST = (__runInitializers(this, _MAIL_PORT_extraInitializers), __runInitializers(this, _MAIL_HOST_initializers, void 0));
                this.MAIL_USER = (__runInitializers(this, _MAIL_HOST_extraInitializers), __runInitializers(this, _MAIL_USER_initializers, void 0));
                this.MAIL_PASSWORD = (__runInitializers(this, _MAIL_USER_extraInitializers), __runInitializers(this, _MAIL_PASSWORD_initializers, void 0));
                this.MAIL_DEFAULT_EMAIL = (__runInitializers(this, _MAIL_PASSWORD_extraInitializers), __runInitializers(this, _MAIL_DEFAULT_EMAIL_initializers, void 0));
                this.MAIL_DEFAULT_NAME = (__runInitializers(this, _MAIL_DEFAULT_EMAIL_extraInitializers), __runInitializers(this, _MAIL_DEFAULT_NAME_initializers, void 0));
                this.MAIL_IGNORE_TLS = (__runInitializers(this, _MAIL_DEFAULT_NAME_extraInitializers), __runInitializers(this, _MAIL_IGNORE_TLS_initializers, void 0));
                this.MAIL_SECURE = (__runInitializers(this, _MAIL_IGNORE_TLS_extraInitializers), __runInitializers(this, _MAIL_SECURE_initializers, void 0));
                this.MAIL_REQUIRE_TLS = (__runInitializers(this, _MAIL_SECURE_extraInitializers), __runInitializers(this, _MAIL_REQUIRE_TLS_initializers, void 0));
                __runInitializers(this, _MAIL_REQUIRE_TLS_extraInitializers);
            }
            return EnvironmentVariablesValidator;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _MAIL_PORT_decorators = [(0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(0), (0, class_validator_1.Max)(65535), (0, class_validator_1.IsOptional)()];
            _MAIL_HOST_decorators = [(0, class_validator_1.IsString)()];
            _MAIL_USER_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _MAIL_PASSWORD_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _MAIL_DEFAULT_EMAIL_decorators = [(0, class_validator_1.IsEmail)()];
            _MAIL_DEFAULT_NAME_decorators = [(0, class_validator_1.IsString)()];
            _MAIL_IGNORE_TLS_decorators = [(0, class_validator_1.IsBoolean)()];
            _MAIL_SECURE_decorators = [(0, class_validator_1.IsBoolean)()];
            _MAIL_REQUIRE_TLS_decorators = [(0, class_validator_1.IsBoolean)()];
            __esDecorate(null, null, _MAIL_PORT_decorators, { kind: "field", name: "MAIL_PORT", static: false, private: false, access: { has: function (obj) { return "MAIL_PORT" in obj; }, get: function (obj) { return obj.MAIL_PORT; }, set: function (obj, value) { obj.MAIL_PORT = value; } }, metadata: _metadata }, _MAIL_PORT_initializers, _MAIL_PORT_extraInitializers);
            __esDecorate(null, null, _MAIL_HOST_decorators, { kind: "field", name: "MAIL_HOST", static: false, private: false, access: { has: function (obj) { return "MAIL_HOST" in obj; }, get: function (obj) { return obj.MAIL_HOST; }, set: function (obj, value) { obj.MAIL_HOST = value; } }, metadata: _metadata }, _MAIL_HOST_initializers, _MAIL_HOST_extraInitializers);
            __esDecorate(null, null, _MAIL_USER_decorators, { kind: "field", name: "MAIL_USER", static: false, private: false, access: { has: function (obj) { return "MAIL_USER" in obj; }, get: function (obj) { return obj.MAIL_USER; }, set: function (obj, value) { obj.MAIL_USER = value; } }, metadata: _metadata }, _MAIL_USER_initializers, _MAIL_USER_extraInitializers);
            __esDecorate(null, null, _MAIL_PASSWORD_decorators, { kind: "field", name: "MAIL_PASSWORD", static: false, private: false, access: { has: function (obj) { return "MAIL_PASSWORD" in obj; }, get: function (obj) { return obj.MAIL_PASSWORD; }, set: function (obj, value) { obj.MAIL_PASSWORD = value; } }, metadata: _metadata }, _MAIL_PASSWORD_initializers, _MAIL_PASSWORD_extraInitializers);
            __esDecorate(null, null, _MAIL_DEFAULT_EMAIL_decorators, { kind: "field", name: "MAIL_DEFAULT_EMAIL", static: false, private: false, access: { has: function (obj) { return "MAIL_DEFAULT_EMAIL" in obj; }, get: function (obj) { return obj.MAIL_DEFAULT_EMAIL; }, set: function (obj, value) { obj.MAIL_DEFAULT_EMAIL = value; } }, metadata: _metadata }, _MAIL_DEFAULT_EMAIL_initializers, _MAIL_DEFAULT_EMAIL_extraInitializers);
            __esDecorate(null, null, _MAIL_DEFAULT_NAME_decorators, { kind: "field", name: "MAIL_DEFAULT_NAME", static: false, private: false, access: { has: function (obj) { return "MAIL_DEFAULT_NAME" in obj; }, get: function (obj) { return obj.MAIL_DEFAULT_NAME; }, set: function (obj, value) { obj.MAIL_DEFAULT_NAME = value; } }, metadata: _metadata }, _MAIL_DEFAULT_NAME_initializers, _MAIL_DEFAULT_NAME_extraInitializers);
            __esDecorate(null, null, _MAIL_IGNORE_TLS_decorators, { kind: "field", name: "MAIL_IGNORE_TLS", static: false, private: false, access: { has: function (obj) { return "MAIL_IGNORE_TLS" in obj; }, get: function (obj) { return obj.MAIL_IGNORE_TLS; }, set: function (obj, value) { obj.MAIL_IGNORE_TLS = value; } }, metadata: _metadata }, _MAIL_IGNORE_TLS_initializers, _MAIL_IGNORE_TLS_extraInitializers);
            __esDecorate(null, null, _MAIL_SECURE_decorators, { kind: "field", name: "MAIL_SECURE", static: false, private: false, access: { has: function (obj) { return "MAIL_SECURE" in obj; }, get: function (obj) { return obj.MAIL_SECURE; }, set: function (obj, value) { obj.MAIL_SECURE = value; } }, metadata: _metadata }, _MAIL_SECURE_initializers, _MAIL_SECURE_extraInitializers);
            __esDecorate(null, null, _MAIL_REQUIRE_TLS_decorators, { kind: "field", name: "MAIL_REQUIRE_TLS", static: false, private: false, access: { has: function (obj) { return "MAIL_REQUIRE_TLS" in obj; }, get: function (obj) { return obj.MAIL_REQUIRE_TLS; }, set: function (obj, value) { obj.MAIL_REQUIRE_TLS = value; } }, metadata: _metadata }, _MAIL_REQUIRE_TLS_initializers, _MAIL_REQUIRE_TLS_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.default = (0, config_1.registerAs)('mail', function () {
    (0, validate_config_1.default)(process.env, EnvironmentVariablesValidator);
    return {
        port: process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT, 10) : 587,
        host: process.env.MAIL_HOST,
        user: process.env.MAIL_USER,
        password: process.env.MAIL_PASSWORD,
        defaultEmail: process.env.MAIL_DEFAULT_EMAIL,
        defaultName: process.env.MAIL_DEFAULT_NAME,
        ignoreTLS: process.env.MAIL_IGNORE_TLS === 'true',
        secure: process.env.MAIL_SECURE === 'true',
        requireTLS: process.env.MAIL_REQUIRE_TLS === 'true',
    };
});
