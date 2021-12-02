const firebaseConfig = {
    apiKey: "AIzaSyC8sLhiboFxIEs4MPqwv6EH6a2yIhXLEaw",
    authDomain: "parcialfinal-cf2da.firebaseapp.com",
    databaseURL: "https://parcialfinal-cf2da-default-rtdb.firebaseio.com",
    projectId: "parcialfinal-cf2da",
    storageBucket: "parcialfinal-cf2da.appspot.com",
    messagingSenderId: "275163836587",
    appId: "1:275163836587:web:bf39039a5b8153ca3e47ee"
  };

  export function getFirebaseConfig()
{
    if(!firebaseConfig || !firebaseConfig.apiKey)
    {
        throw new Error("Firebase config error");
    }
    else
    {
        return firebaseConfig;
    }
}