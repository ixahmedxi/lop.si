import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import { customAlphabet } from 'nanoid/async'
import { isRecentUrl } from './utils/isRecentUrl'
import parseUrl from './utils/parseUrl'
import { BadRequest, OkRequest } from './utils/ResTypes'
import { idValidation, urlValidation } from './utils/schema'

admin.initializeApp()

const db = admin.firestore().collection('urls')
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 4)

export const createShortUrl = functions.https.onRequest(async (req, res) => {
  const { url } = req.query
  res.set('Access-Control-Allow-Origin', 'https://lop.si')
  if (req.method === 'POST' && typeof url === 'string') {
    try {
      const value = await urlValidation.validate(parseUrl(url))
      const isrecent = await isRecentUrl(db, value)
      if (isrecent) {
        BadRequest(res, ['url has been recently shortened'])
      } else {
        const id = await nanoid()
        await db.add({
          id,
          url: value,
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        })
        OkRequest(res, id, value)
      }
    } catch (error) {
      BadRequest(res, error.errors)
    }
  } else {
    BadRequest(res, ['invalid request'])
  }
})

export const findUrlById = functions.https.onRequest(async (req, res) => {
  const { id } = req.query
  res.set('Access-Control-Allow-Origin', 'https://lop.si')
  if (req.method === 'GET' && typeof id === 'string') {
    try {
      await idValidation.validate(id)
      const snapshot = await db.where('id', '==', id).get()
      if (!snapshot.empty) {
        const { id, url } = snapshot.docs[0].data()
        OkRequest(res, id, url)
      } else {
        BadRequest(res, ['invalid id supplied'])
      }
    } catch (error) {
      BadRequest(res, error.errors)
    }
  } else {
    BadRequest(res, ['invalid request'])
  }
})
