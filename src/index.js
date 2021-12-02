
// Importar y configurar firebase
import { getFirebaseConfig} from './firebase-config';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';


// Inicializar y configurar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);


function login (user){
    const db = getDatabase();
    // const nuevoUsuarioRef = push(ref(db,"usuarios"));
    const dbref = ref (db, "users");
    set (dbref, user);
}

// Elementos página
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");
const botonLogin = document.getElementById("botonContinuar");

const loginUsuario = (e, event) => {
    let correito = correo.value;
    let contra = contraseña.value;
    
    
    let user = {
        CORREO: correito,
        CONTRA: contra
       
    }
  
    login(user);
}

botonLogin.addEventListener("click", loginUsuario);




/*function login (e, ev){
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredentials) => {
        console.log(userCredentials);
        window.location.href = "main.html";
    })
    .catch((error) => {
        console.log(error.message);
    });
}*/
