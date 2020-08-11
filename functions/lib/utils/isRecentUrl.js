"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRecentUrl = void 0;
exports.isRecentUrl = async (db, url) => {
    const snapshot = await db.orderBy('createdAt', 'desc').limit(5).get();
    const filterMatchingUrl = snapshot.docs.filter((doc) => doc.data().url === url);
    return filterMatchingUrl.length >= 1;
};
//# sourceMappingURL=isRecentUrl.js.map