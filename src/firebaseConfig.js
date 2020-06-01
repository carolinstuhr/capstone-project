import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAsgcdIQljUwAmIJZWnQNNZY-gQsMCv020',
  authDomain: 'get-cooking.firebaseapp.com',
  databaseURL: 'https://get-cooking.firebaseio.com',
  projectId: 'get-cooking',
  storageBucket: 'get-cooking.appspot.com',
  messagingSenderId: '615349615726',
  appId: '1:615349615726:web:19a59828e9428a451cba7f',
}

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()
