"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseUrl = (url) => url.includes('http://') || url.includes('https://') ? url : 'https://' + String(url);
exports.default = parseUrl;
//# sourceMappingURL=parseUrl.js.map