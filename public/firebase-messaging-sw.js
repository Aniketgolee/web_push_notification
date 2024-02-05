importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
const firebaseConfig = {
    apiKey: "AIzaSyCkxvpKRNP83vRMKA1RG8ugIoTKOlrSPvY",
    authDomain: "react-notification-e1900.firebaseapp.com",
    projectId: "react-notification-e1900",
    storageBucket: "react-notification-e1900.appspot.com",
    messagingSenderId: "384473182555",
    appId: "1:384473182555:web:92a30328ecd1e3a9ffea7e",
    measurementId: "G-GXKELYV3EJ"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {

console.log("Received background message ", payload);
const notificationTitle = payload.notification.title;
const notificationOptions = {
body: payload.notification.body,
};
self.registration.showNotification(notificationTitle, notificationOptions);
});