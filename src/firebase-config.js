import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
apiKey:process.env.RACT_APP_FIREBASE_API_KEY,
authDomain:process.env.RACT_APP_FIREBASE_AUTH_DOMAIN,
projectId:process.env.RACT_APP_FIREBASE_PORJECT_ID,
storageBucket:process.env.RACT_APP_FIREBASE_SOTRAGE_BICKET,
messaginSenderId:process.env.RACT_APP_FIREBASE_MESSAGIN_SENDER,
appId: process.env.REACT_APP-FIREBASE_APP_ID
})

export const auth = app.auth();
export default app;