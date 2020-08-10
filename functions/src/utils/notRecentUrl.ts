import * as functions from 'firebase-functions'
import { BadRequest } from './ResTypes'

const notRecentUrl = async (
  res: functions.Response,
  db: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>,
  url: string
): Promise<void> => {
  const snapshot = await db.orderBy('createdAt', 'desc').limit(5).get()
  const filterMatchingUrl = snapshot.docs.filter((doc) => doc.data().url === url)
  if (filterMatchingUrl.length >= 1) {
    BadRequest(res, ['Url has been shortened recently'])
  }
}

export default notRecentUrl
