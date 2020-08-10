"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idValidation = exports.urlValidation = void 0;
const yup = require("yup");
const blacklist = [
    'bit.ly',
    'cutt.ly',
    'shorturl.at',
    'rebrandly',
    'tinyurl',
    'tiny.cc',
    'raboninco',
    'is.gd',
    'lop.si'
];
exports.urlValidation = yup
    .string()
    .required()
    .url()
    .test('is-blacklisted', 'Url provided is in our blocked list', (value) => {
    const matchingList = blacklist.filter((item) => value.includes(item));
    if (matchingList.length >= 1) {
        return false;
    }
    return true;
});
exports.idValidation = yup.string().required().length(4);
//# sourceMappingURL=schema.js.map