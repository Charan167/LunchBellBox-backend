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
exports.FileType = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var file_config_1 = require("../config/file.config");
var file_config_type_1 = require("../config/file-config.type");
var client_s3_1 = require("@aws-sdk/client-s3");
var s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
var app_config_1 = require("../../config/app.config");
var FileType = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _path_decorators;
    var _path_initializers = [];
    var _path_extraInitializers = [];
    return _a = /** @class */ (function () {
            function FileType() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.path = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _path_initializers, void 0));
                __runInitializers(this, _path_extraInitializers);
            }
            return FileType;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                    example: 'cbcfa8b8-3a25-4adb-a9c6-e325f0d0f3ae',
                }), (0, class_validator_1.Allow)()];
            _path_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                    example: 'https://example.com/path/to/file.jpg',
                }), (0, class_transformer_1.Transform)(function (_b) {
                    var _c, _d, _e, _f;
                    var value = _b.value;
                    if ((0, file_config_1.default)().driver === file_config_type_1.FileDriver.LOCAL) {
                        return (0, app_config_1.default)().backendDomain + value;
                    }
                    else if ([file_config_type_1.FileDriver.S3_PRESIGNED, file_config_type_1.FileDriver.S3].includes((0, file_config_1.default)().driver)) {
                        var s3 = new client_s3_1.S3Client({
                            region: (_c = (0, file_config_1.default)().awsS3Region) !== null && _c !== void 0 ? _c : '',
                            credentials: {
                                accessKeyId: (_d = (0, file_config_1.default)().accessKeyId) !== null && _d !== void 0 ? _d : '',
                                secretAccessKey: (_e = (0, file_config_1.default)().secretAccessKey) !== null && _e !== void 0 ? _e : '',
                            },
                        });
                        var command = new client_s3_1.GetObjectCommand({
                            Bucket: (_f = (0, file_config_1.default)().awsDefaultS3Bucket) !== null && _f !== void 0 ? _f : '',
                            Key: value,
                        });
                        return (0, s3_request_presigner_1.getSignedUrl)(s3, command, { expiresIn: 3600 });
                    }
                    return value;
                }, {
                    toPlainOnly: true,
                })];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _path_decorators, { kind: "field", name: "path", static: false, private: false, access: { has: function (obj) { return "path" in obj; }, get: function (obj) { return obj.path; }, set: function (obj, value) { obj.path = value; } }, metadata: _metadata }, _path_initializers, _path_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.FileType = FileType;
