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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesS3Module = void 0;
var common_1 = require("@nestjs/common");
var files_controller_1 = require("./files.controller");
var platform_express_1 = require("@nestjs/platform-express");
var config_1 = require("@nestjs/config");
var random_string_generator_util_1 = require("@nestjs/common/utils/random-string-generator.util");
var client_s3_1 = require("@aws-sdk/client-s3");
var multer_s3_1 = require("multer-s3");
var files_service_1 = require("./files.service");
var relational_persistence_module_1 = require("../../persistence/relational/relational-persistence.module");
var infrastructurePersistenceModule = relational_persistence_module_1.RelationalFilePersistenceModule;
var FilesS3Module = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                infrastructurePersistenceModule,
                platform_express_1.MulterModule.registerAsync({
                    imports: [config_1.ConfigModule],
                    inject: [config_1.ConfigService],
                    useFactory: function (configService) {
                        var s3 = new client_s3_1.S3Client({
                            region: configService.get('file.awsS3Region', { infer: true }),
                            credentials: {
                                accessKeyId: configService.getOrThrow('file.accessKeyId', {
                                    infer: true,
                                }),
                                secretAccessKey: configService.getOrThrow('file.secretAccessKey', {
                                    infer: true,
                                }),
                            },
                        });
                        return {
                            fileFilter: function (request, file, callback) {
                                if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
                                    return callback(new common_1.UnprocessableEntityException({
                                        status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                                        errors: {
                                            file: "cantUploadFileType",
                                        },
                                    }), false);
                                }
                                callback(null, true);
                            },
                            storage: (0, multer_s3_1.default)({
                                s3: s3,
                                bucket: configService.getOrThrow('file.awsDefaultS3Bucket', {
                                    infer: true,
                                }),
                                contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
                                key: function (request, file, callback) {
                                    var _a;
                                    callback(null, "".concat((0, random_string_generator_util_1.randomStringGenerator)(), ".").concat((_a = file.originalname
                                        .split('.')
                                        .pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase()));
                                },
                            }),
                            limits: {
                                fileSize: configService.get('file.maxFileSize', { infer: true }),
                            },
                        };
                    },
                }),
            ],
            controllers: [files_controller_1.FilesS3Controller],
            providers: [files_service_1.FilesS3Service],
            exports: [files_service_1.FilesS3Service],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var FilesS3Module = _classThis = /** @class */ (function () {
        function FilesS3Module_1() {
        }
        return FilesS3Module_1;
    }());
    __setFunctionName(_classThis, "FilesS3Module");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FilesS3Module = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FilesS3Module = _classThis;
}();
exports.FilesS3Module = FilesS3Module;
