import 'firebase/analytics'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { customAlphabet } from 'nanoid/async'
import { createContext, useContext, useEffect, useState } from 'react'

interface IFirebaseContext {
  findOneById: (id: string) => Promise<string | undefined> | null
  createOneUrl: (url: string) => Promise<string | undefined> | null
}

const credentials = {
  apiKey: 'AIzaSyBcXZcO0o2nrmCUChr55gMS4_SbmvDprWc',
  authDomain: 'lopsi-ef5b7.firebaseapp.com',
  databaseURL: 'https://lopsi-ef5b7.firebaseio.com',
  projectId: 'lopsi-ef5b7',
  storageBucket: 'lopsi-ef5b7.appspot.com',
  messagingSenderId: '566541013025',
  appId: '1:566541013025:web:635f76ed0859d7501dd360',
  measurementId: 'G-8JCGQPRQ2B'
}

export const FirebaseContext = createContext<IFirebaseContext>({
  findOneById: () => null,
  createOneUrl: () => null
})

export const FirebaseProvider: React.FC = ({ children }) => {
  const [db, setDb] = useState<
    firebase.firestore.CollectionReference<firebase.firestore.DocumentData> | undefined
  >()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      firebase.initializeApp(credentials)
      firebase.analytics()
      setDb(firebase.firestore().collection('urls'))
    }
  }, [])

  const findOneById = async (id: string): Promise<string | undefined> => {
    if (typeof db !== 'undefined') {
      const records = await db.where('id', '==', id).limit(1).get()
      if (!records.empty) {
        let url: string | undefined

        records.forEach((item) => {
          url = item.data().url
        })

        return url
      }
    }
  }

  const createOneUrl = async (url: string): Promise<string | undefined> => {
    if (typeof db !== 'undefined') {
      const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 4)
      const id = await nanoid()

      await db.add({
        id,
        url,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })

      return id
    }
  }

  return (
    <FirebaseContext.Provider value={{ findOneById, createOneUrl }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export const useFirestore = (): IFirebaseContext => useContext(FirebaseContext)
