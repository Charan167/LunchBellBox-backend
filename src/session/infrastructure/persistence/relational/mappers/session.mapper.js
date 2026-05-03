"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionMapper = void 0;
var user_entity_1 = require("../../../../../users/infrastructure/persistence/relational/entities/user.entity");
var user_mapper_1 = require("../../../../../users/infrastructure/persistence/relational/mappers/user.mapper");
var session_1 = require("../../../../domain/session");
var session_entity_1 = require("../entities/session.entity");
var SessionMapper = /** @class */ (function () {
    function SessionMapper() {
    }
    SessionMapper.toDomain = function (raw) {
        var domainEntity = new session_1.Session();
        domainEntity.id = raw.id;
        if (raw.user) {
            domainEntity.user = user_mapper_1.UserMapper.toDomain(raw.user);
        }
        domainEntity.hash = raw.hash;
        domainEntity.createdAt = raw.createdAt;
        domainEntity.updatedAt = raw.updatedAt;
        domainEntity.deletedAt = raw.deletedAt;
        return domainEntity;
    };
    SessionMapper.toPersistence = function (domainEntity) {
        var user = new user_entity_1.UserEntity();
        user.id = Number(domainEntity.user.id);
        var persistenceEntity = new session_entity_1.SessionEntity();
        if (domainEntity.id && typeof domainEntity.id === 'number') {
            persistenceEntity.id = domainEntity.id;
        }
        persistenceEntity.hash = domainEntity.hash;
        persistenceEntity.user = user;
        persistenceEntity.createdAt = domainEntity.createdAt;
        persistenceEntity.updatedAt = domainEntity.updatedAt;
        persistenceEntity.deletedAt = domainEntity.deletedAt;
        return persistenceEntity;
    };
    return SessionMapper;
}());
exports.SessionMapper = SessionMapper;
