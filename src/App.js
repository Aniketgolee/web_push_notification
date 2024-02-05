import React from 'react';
import { messaging, getToken, onMessageListener} from './firebase';
function App() {
  React.useEffect(() => {
    requestPermission();
    }, []);
    const requestPermission = async () => {
      const VAPID_KEY = process.env.REACT_APP_VAPID_KEY
      try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
      const token = await getToken(messaging, {
      vapidKey:VAPID_KEY,
      });
      console.log('FCM Token:', token);
      }
      } catch (error) {
      console.error('Error requesting permission:', error);
      }
    };
  onMessageListener()
  .then((payload) => {
  console.log({title: payload?.notification?.title, body: payload?.notification?.body});
  })
  .catch((err) => console.log('failed: ', err));
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
