
// Importar y configurar firebase
import { getFirebaseConfig} from './firebase-config';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';


// Inicializar y configurar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const auth = getAuth();


function login (user){
    const db = getDatabase();
    // const nuevoUsuarioRef = push(ref(db,"usuarios"));
    const dbref = ref (db, "users" + user.CORREO);
    set (dbref, user);
}

// Elementos página
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");
const botonLogin = document.getElementById("botonContinuar");

const loginUsuario = (e, event) => {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((credencialUsario) => {
        console.log(credencialUsario);
        window.location.href = "patallaVotacione.html";

        const user = {
            correito: correo.value,
            contra: contraseña.value
        }

        const dbref = ref (db, "usuarios/" + user.correito);
        set(dbRef, user).then(() =>{

            alert("algo paso creo, pero no se");
        });
    })
    .catch((error) =>
    {
        console.log(error.message);
    });
}

login(user);
botonLogin.addEventListener("click", login);

onAuthStateChanged(auth, (user_account)=>{
    if (user_account){
        window.location.href = "patallaVotacione.html"
    }
});
      
    
    
  












botonLogin.addEventListener("click", loginUsuario);



