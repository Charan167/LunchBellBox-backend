"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1715028537217 = void 0;
var CreateUser1715028537217 = /** @class */ (function () {
    function CreateUser1715028537217() {
        this.name = 'CreateUser1715028537217';
    }
    CreateUser1715028537217.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"role\" (\"id\" integer NOT NULL, \"name\" character varying NOT NULL, CONSTRAINT \"PK_b36bcfe02fc8de3c57a8b2391c2\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"status\" (\"id\" integer NOT NULL, \"name\" character varying NOT NULL, CONSTRAINT \"PK_e12743a7086ec826733f54e1d95\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"file\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"path\" character varying NOT NULL, CONSTRAINT \"PK_36b46d232307066b3a2c9ea3a1d\" PRIMARY KEY (\"id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user\" (\"id\" SERIAL NOT NULL, \"email\" character varying, \"password\" character varying, \"provider\" character varying NOT NULL DEFAULT 'email', \"socialId\" character varying, \"firstName\" character varying, \"lastName\" character varying, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"deletedAt\" TIMESTAMP, \"photoId\" uuid, \"roleId\" integer, \"statusId\" integer, CONSTRAINT \"UQ_e12875dfb3b1d92d7d7c5377e22\" UNIQUE (\"email\"), CONSTRAINT \"REL_75e2be4ce11d447ef43be0e374\" UNIQUE (\"photoId\"), CONSTRAINT \"PK_cace4a159ff9f2512dd42373760\" PRIMARY KEY (\"id\"))")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_9bd2fe7a8e694dedc4ec2f666f\" ON \"user\" (\"socialId\") ")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_58e4dbff0e1a32a9bdc861bb29\" ON \"user\" (\"firstName\") ")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_f0e1b4ecdca13b177e2e3a0613\" ON \"user\" (\"lastName\") ")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"session\" (\"id\" SERIAL NOT NULL, \"hash\" character varying NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"deletedAt\" TIMESTAMP, \"userId\" integer, CONSTRAINT \"PK_f55da76ac1c3ac420f444d2ff11\" PRIMARY KEY (\"id\"))")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_3d2f174ef04fb312fdebd0ddc5\" ON \"session\" (\"userId\") ")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" ADD CONSTRAINT \"FK_75e2be4ce11d447ef43be0e374f\" FOREIGN KEY (\"photoId\") REFERENCES \"file\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" ADD CONSTRAINT \"FK_c28e52f758e7bbc53828db92194\" FOREIGN KEY (\"roleId\") REFERENCES \"role\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" ADD CONSTRAINT \"FK_dc18daa696860586ba4667a9d31\" FOREIGN KEY (\"statusId\") REFERENCES \"status\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"session\" ADD CONSTRAINT \"FK_3d2f174ef04fb312fdebd0ddc53\" FOREIGN KEY (\"userId\") REFERENCES \"user\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateUser1715028537217.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"session\" DROP CONSTRAINT \"FK_3d2f174ef04fb312fdebd0ddc53\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" DROP CONSTRAINT \"FK_dc18daa696860586ba4667a9d31\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" DROP CONSTRAINT \"FK_c28e52f758e7bbc53828db92194\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" DROP CONSTRAINT \"FK_75e2be4ce11d447ef43be0e374f\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"public\".\"IDX_3d2f174ef04fb312fdebd0ddc5\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"session\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"public\".\"IDX_f0e1b4ecdca13b177e2e3a0613\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"public\".\"IDX_58e4dbff0e1a32a9bdc861bb29\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"public\".\"IDX_9bd2fe7a8e694dedc4ec2f666f\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"file\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"status\"")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"role\"")];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CreateUser1715028537217;
}());
exports.CreateUser1715028537217 = CreateUser1715028537217;
