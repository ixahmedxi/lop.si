import firebase from 'firebase/app'
import 'firebase/firestore'
import { customAlphabet } from 'nanoid/async'

export const credentials = {
  apiKey: 'AIzaSyBcXZcO0o2nrmCUChr55gMS4_SbmvDprWc',
  authDomain: 'lopsi-ef5b7.firebaseapp.com',
  databaseURL: 'https://lopsi-ef5b7.firebaseio.com',
  projectId: 'lopsi-ef5b7',
  storageBucket: 'lopsi-ef5b7.appspot.com',
  messagingSenderId: '566541013025',
  appId: '1:566541013025:web:635f76ed0859d7501dd360',
  measurementId: 'G-8JCGQPRQ2B'
}

let db: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>

export const init = (): void => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, unicorn/explicit-length-check
  if (typeof window !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(credentials)
    db = firebase.firestore().collection('urls')
  }
}

export const findOneById = async (
  id: string
): Promise<firebase.firestore.DocumentData | undefined> => {
  const record = await db.where('id', '==', id).limit(1).get()

  if (record.empty) {
    return
  }

  return record
}

export const createOneByUrl = async (url: string): Promise<string> => {
  const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 4)
  const id = await nanoid()

  await db.add({
    id,
    url
  })

  return id
}

export default firebase
