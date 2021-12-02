import { getFirebaseConfig} from './firebase-config';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {tarjetaLibro} from './tarjetaLibro';

const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const db = getDatabase();

const tarjetasDiv = document.getElementById("tarjetasDiv");

function obtenerLibros(){
 
    const db = getDatabase();
    const Ref = ref(db, 'libro');

    onValue(Ref, (snapshot) => {
        const data = snapshot.val();
        actializarBaseDeDatos(data);
    });
}

function actializarBaseDeDatos (data) {

    if (data) {
        tarjetasDiv.innerHTML ="";

        Object.keys(data).forEach((k, i) =>{
            const L = new tarjetaLibro (data[k]);
            tarjetasDiv.appendChild (L.render());
        })

    }

}
obtenerLibros();

