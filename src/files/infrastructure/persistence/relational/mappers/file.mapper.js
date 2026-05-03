"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMapper = void 0;
var file_1 = require("../../../../domain/file");
var file_entity_1 = require("../entities/file.entity");
var FileMapper = /** @class */ (function () {
    function FileMapper() {
    }
    FileMapper.toDomain = function (raw) {
        var domainEntity = new file_1.FileType();
        domainEntity.id = raw.id;
        domainEntity.path = raw.path;
        return domainEntity;
    };
    FileMapper.toPersistence = function (domainEntity) {
        var persistenceEntity = new file_entity_1.FileEntity();
        persistenceEntity.id = domainEntity.id;
        persistenceEntity.path = domainEntity.path;
        return persistenceEntity;
    };
    return FileMapper;
}());
exports.FileMapper = FileMapper;
