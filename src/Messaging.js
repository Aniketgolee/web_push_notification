
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import React from 'react'
 
function Messaging() {
  const firebaseConfig = {
    apiKey: "AIzaSyCkxvpKRNP83vRMKA1RG8ugIoTKOlrSPvY",
    authDomain: "react-notification-e1900.firebaseapp.com",
    projectId: "react-notification-e1900",
    storageBucket: "react-notification-e1900.appspot.com",
    messagingSenderId: "384473182555",
    appId: "1:384473182555:web:92a30328ecd1e3a9ffea7e",
    measurementId: "G-GXKELYV3EJ"
  };

  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);

  function requestPermission() {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        getTokenAndUpdateUI(messaging);
      } else {
        console.log('Notification permission denied.');
      }
    });
  }

  function getTokenAndUpdateUI(messaging) {
    getToken(messaging, {
      vapidKey: "BB1GL40Aq2fqUAfaxa9VStdQibOkIQ8MtGTD78uwzP-MtWQ25zbjeW53sntZV12437P1e4V-Q3R0DFzCAEdiYUM",
    })
      .then((currentToken) => {
        console.log("Firebase Token", currentToken);
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
  }

  requestPermission();

  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    // ...
  });
  
}

export default Messaging




