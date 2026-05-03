"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infinityPagination = void 0;
var infinityPagination = function (data, options) {
    return {
        data: data,
        hasNextPage: data.length === options.limit,
    };
};
exports.infinityPagination = infinityPagination;
