import firebase from 'firebase';

export const initializeFirebase = () => {
 

 

  firebase.initializeApp({messagingSenderId: "824440442769"});


}

export const askForPermissioToReceiveNotifications = () => {
  

    const messaging = firebase.messaging();

    messaging.requestPermission();
    const token = messaging.getToken();
    console.log('user token: ', token);

    
     fetch("https://iid.googleapis.com/iid/v1/"+ token + "/rel/topics/all",{
        method: 'POST',
        headers:{'Authorization':'key=AAAAv_R6z5E:APA91bHLXWzm5oMfs44Q6iZRxOQhI9-kQKaxpeY497zYE_XamXGlPymImjGhXpst_zjv89h4zrRWh7DmoPpw8rCnHXhmHAIcSWl75A6d5sPq0TNgLDGaemewxe7BIhW4fqLt5nLFekDX',
        'Content-Type':'application/json'
      }
      }).then(res => console.log(res))
      .catch(error => console.error('Error:', error))
      
      

    
    return token;
  
}
