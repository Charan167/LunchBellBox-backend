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
var file_config_type_1 = require("./file-config.type");
var EnvironmentVariablesValidator = function () {
    var _a;
    var _FILE_DRIVER_decorators;
    var _FILE_DRIVER_initializers = [];
    var _FILE_DRIVER_extraInitializers = [];
    var _ACCESS_KEY_ID_decorators;
    var _ACCESS_KEY_ID_initializers = [];
    var _ACCESS_KEY_ID_extraInitializers = [];
    var _SECRET_ACCESS_KEY_decorators;
    var _SECRET_ACCESS_KEY_initializers = [];
    var _SECRET_ACCESS_KEY_extraInitializers = [];
    var _AWS_DEFAULT_S3_BUCKET_decorators;
    var _AWS_DEFAULT_S3_BUCKET_initializers = [];
    var _AWS_DEFAULT_S3_BUCKET_extraInitializers = [];
    var _AWS_S3_REGION_decorators;
    var _AWS_S3_REGION_initializers = [];
    var _AWS_S3_REGION_extraInitializers = [];
    return _a = /** @class */ (function () {
            function EnvironmentVariablesValidator() {
                this.FILE_DRIVER = __runInitializers(this, _FILE_DRIVER_initializers, void 0);
                this.ACCESS_KEY_ID = (__runInitializers(this, _FILE_DRIVER_extraInitializers), __runInitializers(this, _ACCESS_KEY_ID_initializers, void 0));
                this.SECRET_ACCESS_KEY = (__runInitializers(this, _ACCESS_KEY_ID_extraInitializers), __runInitializers(this, _SECRET_ACCESS_KEY_initializers, void 0));
                this.AWS_DEFAULT_S3_BUCKET = (__runInitializers(this, _SECRET_ACCESS_KEY_extraInitializers), __runInitializers(this, _AWS_DEFAULT_S3_BUCKET_initializers, void 0));
                this.AWS_S3_REGION = (__runInitializers(this, _AWS_DEFAULT_S3_BUCKET_extraInitializers), __runInitializers(this, _AWS_S3_REGION_initializers, void 0));
                __runInitializers(this, _AWS_S3_REGION_extraInitializers);
            }
            return EnvironmentVariablesValidator;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _FILE_DRIVER_decorators = [(0, class_validator_1.IsEnum)(file_config_type_1.FileDriver)];
            _ACCESS_KEY_ID_decorators = [(0, class_validator_1.ValidateIf)(function (envValues) {
                    return [file_config_type_1.FileDriver.S3, file_config_type_1.FileDriver.S3_PRESIGNED].includes(envValues.FILE_DRIVER);
                }), (0, class_validator_1.IsString)()];
            _SECRET_ACCESS_KEY_decorators = [(0, class_validator_1.ValidateIf)(function (envValues) {
                    return [file_config_type_1.FileDriver.S3, file_config_type_1.FileDriver.S3_PRESIGNED].includes(envValues.FILE_DRIVER);
                }), (0, class_validator_1.IsString)()];
            _AWS_DEFAULT_S3_BUCKET_decorators = [(0, class_validator_1.ValidateIf)(function (envValues) {
                    return [file_config_type_1.FileDriver.S3, file_config_type_1.FileDriver.S3_PRESIGNED].includes(envValues.FILE_DRIVER);
                }), (0, class_validator_1.IsString)()];
            _AWS_S3_REGION_decorators = [(0, class_validator_1.ValidateIf)(function (envValues) {
                    return [file_config_type_1.FileDriver.S3, file_config_type_1.FileDriver.S3_PRESIGNED].includes(envValues.FILE_DRIVER);
                }), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _FILE_DRIVER_decorators, { kind: "field", name: "FILE_DRIVER", static: false, private: false, access: { has: function (obj) { return "FILE_DRIVER" in obj; }, get: function (obj) { return obj.FILE_DRIVER; }, set: function (obj, value) { obj.FILE_DRIVER = value; } }, metadata: _metadata }, _FILE_DRIVER_initializers, _FILE_DRIVER_extraInitializers);
            __esDecorate(null, null, _ACCESS_KEY_ID_decorators, { kind: "field", name: "ACCESS_KEY_ID", static: false, private: false, access: { has: function (obj) { return "ACCESS_KEY_ID" in obj; }, get: function (obj) { return obj.ACCESS_KEY_ID; }, set: function (obj, value) { obj.ACCESS_KEY_ID = value; } }, metadata: _metadata }, _ACCESS_KEY_ID_initializers, _ACCESS_KEY_ID_extraInitializers);
            __esDecorate(null, null, _SECRET_ACCESS_KEY_decorators, { kind: "field", name: "SECRET_ACCESS_KEY", static: false, private: false, access: { has: function (obj) { return "SECRET_ACCESS_KEY" in obj; }, get: function (obj) { return obj.SECRET_ACCESS_KEY; }, set: function (obj, value) { obj.SECRET_ACCESS_KEY = value; } }, metadata: _metadata }, _SECRET_ACCESS_KEY_initializers, _SECRET_ACCESS_KEY_extraInitializers);
            __esDecorate(null, null, _AWS_DEFAULT_S3_BUCKET_decorators, { kind: "field", name: "AWS_DEFAULT_S3_BUCKET", static: false, private: false, access: { has: function (obj) { return "AWS_DEFAULT_S3_BUCKET" in obj; }, get: function (obj) { return obj.AWS_DEFAULT_S3_BUCKET; }, set: function (obj, value) { obj.AWS_DEFAULT_S3_BUCKET = value; } }, metadata: _metadata }, _AWS_DEFAULT_S3_BUCKET_initializers, _AWS_DEFAULT_S3_BUCKET_extraInitializers);
            __esDecorate(null, null, _AWS_S3_REGION_decorators, { kind: "field", name: "AWS_S3_REGION", static: false, private: false, access: { has: function (obj) { return "AWS_S3_REGION" in obj; }, get: function (obj) { return obj.AWS_S3_REGION; }, set: function (obj, value) { obj.AWS_S3_REGION = value; } }, metadata: _metadata }, _AWS_S3_REGION_initializers, _AWS_S3_REGION_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.default = (0, config_1.registerAs)('file', function () {
    var _a;
    (0, validate_config_1.default)(process.env, EnvironmentVariablesValidator);
    return {
        driver: (_a = process.env.FILE_DRIVER) !== null && _a !== void 0 ? _a : file_config_type_1.FileDriver.LOCAL,
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        awsDefaultS3Bucket: process.env.AWS_DEFAULT_S3_BUCKET,
        awsS3Region: process.env.AWS_S3_REGION,
        maxFileSize: 5242880, // 5mb
    };
});
