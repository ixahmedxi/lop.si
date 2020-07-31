import firebase from 'firebase/app'
import 'firebase/firestore'
import { customAlphabet } from 'nanoid/async'

export const credentials = {
  apiKey: String(process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
  authDomain: String(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
  databaseURL: String(process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL),
  projectId: String(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
  storageBucket: String(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: String(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID),
  appId: String(process.env.NEXT_PUBLIC_FIREBASE_APP_ID),
  measurementId: String(process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID)
}

export const init = (): void => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, unicorn/explicit-length-check
  if (typeof window !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(credentials)
  }
}

export const findOneById = async (
  id: string
): Promise<firebase.firestore.DocumentData | undefined> => {
  const db = firebase.firestore().collection('urls')
  const record = await db.where('id', '==', id).limit(1).get()

  if (record.empty) {
    return
  }

  return record
}

export const createOneByUrl = async (url: string): Promise<string> => {
  const db = firebase.firestore().collection('urls')
  const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 4)
  const id = await nanoid()

  await db.add({
    id,
    url
  })

  return id
}

export default firebase
