"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
function generateErrors(errors) {
    return errors.reduce(function (accumulator, currentValue) {
        var _a;
        var _b, _c, _d, _e;
        return (__assign(__assign({}, accumulator), (_a = {}, _a[currentValue.property] = ((_c = (_b = currentValue.children) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) > 0
            ? generateErrors((_d = currentValue.children) !== null && _d !== void 0 ? _d : [])
            : Object.values((_e = currentValue.constraints) !== null && _e !== void 0 ? _e : {}).join(', '), _a)));
    }, {});
}
var validationOptions = {
    transform: true,
    whitelist: true,
    errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    exceptionFactory: function (errors) {
        return new common_1.UnprocessableEntityException({
            status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
            errors: generateErrors(errors),
        });
    },
};
exports.default = validationOptions;
