"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUrlById = exports.createShortUrl = void 0;
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const async_1 = require("nanoid/async");
const notRecentUrl_1 = require("./utils/notRecentUrl");
const parseUrl_1 = require("./utils/parseUrl");
const ResTypes_1 = require("./utils/ResTypes");
const schema_1 = require("./utils/schema");
admin.initializeApp();
const db = admin.firestore().collection('urls');
const nanoid = async_1.customAlphabet('abcdefghijklmnopqrstuvwxyz', 4);
exports.createShortUrl = functions.https.onRequest(async (req, res) => {
    const { url } = req.query;
    res.set('Access-Control-Allow-Origin', 'https://lop.si');
    if (req.method === 'POST' && typeof url === 'string') {
        try {
            const value = await schema_1.urlValidation.validate(parseUrl_1.default(url));
            await notRecentUrl_1.default(res, db, value);
            const id = await nanoid();
            await db.add({
                id,
                url: value,
                createdAt: admin.firestore.FieldValue.serverTimestamp()
            });
            ResTypes_1.OkRequest(res, id, value);
        }
        catch (error) {
            ResTypes_1.BadRequest(res, error.errors);
        }
    }
    else {
        ResTypes_1.BadRequest(res, ['invalid request']);
    }
});
exports.findUrlById = functions.https.onRequest(async (req, res) => {
    const { id } = req.query;
    res.set('Access-Control-Allow-Origin', 'https://lop.si');
    if (req.method === 'GET' && typeof id === 'string') {
        try {
            await schema_1.idValidation.validate(id);
            const snapshot = await db.where('id', '==', id).get();
            if (!snapshot.empty) {
                const { id, url } = snapshot.docs[0].data();
                ResTypes_1.OkRequest(res, id, url);
            }
            else {
                ResTypes_1.BadRequest(res, ['invalid id supplied']);
            }
        }
        catch (error) {
            ResTypes_1.BadRequest(res, error.errors);
        }
    }
    else {
        ResTypes_1.BadRequest(res, ['invalid request']);
    }
});
//# sourceMappingURL=index.js.map