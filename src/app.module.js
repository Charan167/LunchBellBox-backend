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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var users_module_1 = require("./users/users.module");
var files_module_1 = require("./files/files.module");
var auth_module_1 = require("./auth/auth.module");
var database_config_1 = require("./database/config/database.config");
var auth_config_1 = require("./auth/config/auth.config");
var app_config_1 = require("./config/app.config");
var mail_config_1 = require("./mail/config/mail.config");
var file_config_1 = require("./files/config/file.config");
var google_config_1 = require("./auth-google/config/google.config");
var path_1 = require("path");
var config_1 = require("@nestjs/config");
var typeorm_1 = require("@nestjs/typeorm");
var auth_google_module_1 = require("./auth-google/auth-google.module");
var nestjs_i18n_1 = require("nestjs-i18n");
var typeorm_config_service_1 = require("./database/typeorm-config.service");
var mail_module_1 = require("./mail/mail.module");
var home_module_1 = require("./home/home.module");
var typeorm_2 = require("typeorm");
var session_module_1 = require("./session/session.module");
var mailer_module_1 = require("./mailer/mailer.module");
var infrastructureDatabaseModule = typeorm_1.TypeOrmModule.forRootAsync({
    useClass: typeorm_config_service_1.TypeOrmConfigService,
    dataSourceFactory: function (options) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new typeorm_2.DataSource(options).initialize()];
        });
    }); },
});
var AppModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                    load: [
                        database_config_1.default,
                        auth_config_1.default,
                        app_config_1.default,
                        mail_config_1.default,
                        file_config_1.default,
                        google_config_1.default,
                    ],
                    envFilePath: ['.env'],
                }),
                infrastructureDatabaseModule,
                nestjs_i18n_1.I18nModule.forRootAsync({
                    useFactory: function (configService) { return ({
                        fallbackLanguage: configService.getOrThrow('app.fallbackLanguage', {
                            infer: true,
                        }),
                        loaderOptions: { path: path_1.default.join(__dirname, '/i18n/'), watch: true },
                    }); },
                    resolvers: [
                        {
                            use: nestjs_i18n_1.HeaderResolver,
                            useFactory: function (configService) {
                                return [
                                    configService.get('app.headerLanguage', {
                                        infer: true,
                                    }),
                                ];
                            },
                            inject: [config_1.ConfigService],
                        },
                    ],
                    imports: [config_1.ConfigModule],
                    inject: [config_1.ConfigService],
                }),
                users_module_1.UsersModule,
                files_module_1.FilesModule,
                auth_module_1.AuthModule,
                auth_google_module_1.AuthGoogleModule,
                session_module_1.SessionModule,
                mail_module_1.MailModule,
                mailer_module_1.MailerModule,
                home_module_1.HomeModule,
            ],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AppModule = _classThis = /** @class */ (function () {
        function AppModule_1() {
        }
        return AppModule_1;
    }());
    __setFunctionName(_classThis, "AppModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppModule = _classThis;
}();
exports.AppModule = AppModule;
