"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResTypes_1 = require("./ResTypes");
const notRecentUrl = async (res, db, url) => {
    const snapshot = await db.orderBy('createdAt', 'desc').limit(5).get();
    const filterMatchingUrl = snapshot.docs.filter((doc) => doc.data().url === url);
    if (filterMatchingUrl.length >= 1) {
        ResTypes_1.BadRequest(res, ['Url has been shortened recently']);
    }
};
exports.default = notRecentUrl;
//# sourceMappingURL=notRecentUrl.js.map