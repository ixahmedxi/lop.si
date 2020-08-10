"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OkRequest = exports.BadRequest = void 0;
exports.BadRequest = (res, errors) => res.status(400).json({
    statusCode: 400,
    description: 'Bad Request',
    errors
});
exports.OkRequest = (res, id, url) => res.status(200).json({
    statusCode: 200,
    description: 'Successful Request',
    id,
    url
});
//# sourceMappingURL=ResTypes.js.map