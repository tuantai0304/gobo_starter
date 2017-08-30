/**
 * Firebase Reference/Init
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import * as Firebase from 'firebase';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
} from 'react-native-dotenv';

let firebaseInitialized = false;

// if (
//   API_KEY !== 'null' &&
//   AUTH_DOMAIN !== 'null' &&
//   DATABASE_URL !== 'null' &&
//   STORAGE_BUCKET !== 'null' &&
//   MESSAGING_SENDER_ID !== 'null'
// ) {
  Firebase.initializeApp({
    // apiKey: API_KEY,
    // authDomain: AUTH_DOMAIN,
    // databaseURL: DATABASE_URL,
    // storageBucket: STORAGE_BUCKET,
    // messagingSenderId: MESSAGING_SENDER_ID,
    apiKey: "AIzaSyCTeOxBXfzG5cBDfbSrn61UmbQ4DX9E0ho",
    authDomain: "learnreactnative-2432c.firebaseapp.com",
    databaseURL: "https://learnreactnative-2432c.firebaseio.com",
    projectId: "learnreactnative-2432c",
    storageBucket: "learnreactnative-2432c.appspot.com",
    messagingSenderId: "985626450608"
  });

  firebaseInitialized = true;
// }

export const FirebaseRef = firebaseInitialized ? Firebase.database().ref() : null;
export default firebaseInitialized ? Firebase : null;
