import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import { onMessage } from 'firebase/messaging';

const API_KEY = process.env.REACT_APP_API_KEY
const AUTH_DOMAIN =process.env.REACT_APP_AUTH_DOMAIN
const PROJECT_ID = process.env.REACT_APP_PROJECT_ID
const STORAGE_BUCKET= process.env.REACT_APP_STORAGE_BUCKET
const MESSAGE_SENDER_ID = process.env.REACT_APP_MESSAGE_SENDER_ID
const APP_ID = process.env.REACT_APP_APP_ID
const MEASUREMENT_ID =process.env.REACT_APP_MEASUREMENT_ID
console.log(PROJECT_ID)
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket:STORAGE_BUCKET ,
    messagingSenderId:MESSAGE_SENDER_ID ,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID 
};
console.log(firebaseConfig)
const initializedFirebaseApp = initializeApp(firebaseConfig);
console.log('initializedFirebaseApp', initializedFirebaseApp)
const messaging = getMessaging(initializedFirebaseApp);
console.log('getToken', getToken)

const onMessageListener = () =>
new Promise((resolve) => {
onMessage(messaging, (payload) => {
resolve(payload);
});
});

export { messaging, getToken, onMessageListener};

