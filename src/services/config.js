import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// Vamos a importar dos funciones de Firebase

// initializeApp: Esta funcion la utilizo para Iniciar la conexion con Firebase.
// getFirestore: Esta funcion la utilizo para obtener una instancia de Firestore.


// Estamos trabajando con un objeto con toda la informacion de la cuenta. Aca se incluye la "key" personal de acceso a la Base de Datos (BD)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tienda-guitarras-facu.firebaseapp.com",
  projectId: "tienda-guitarras-facu",
  storageBucket: "tienda-guitarras-facu.appspot.com",
  messagingSenderId: "463603827766",
  appId: "1:463603827766:web:dbaa8b6099a0b584b60497"
};

// Inicializamos Firebase, y se pasa la configuracion como argumento. Esto retorna una instancia de Firebase.
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Exportamos esta referencia para que este disponible en toda nuestra aplicacion.