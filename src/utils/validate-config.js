"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
function validateConfig(config, envVariablesClass) {
    var validatedConfig = (0, class_transformer_1.plainToClass)(envVariablesClass, config, {
        enableImplicitConversion: true,
    });
    var errors = (0, class_validator_1.validateSync)(validatedConfig, {
        skipMissingProperties: false,
    });
    if (errors.length > 0) {
        throw new Error(errors.toString());
    }
    return validatedConfig;
}
exports.default = validateConfig;
