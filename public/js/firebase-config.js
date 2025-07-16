// public/js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔁 Reemplaza con tus datos reales desde Firebase Console > Configuración del proyecto > SDK Web
const firebaseConfig = {
    apiKey: "AIzaSyBWJIc0QoAyL0xg2diifTCC5fsu-hmxino",
    authDomain: "tobygames-57dae.firebaseapp.com",
    projectId: "tobygames-57dae",
    storageBucket: "tobygames-57dae.firebasestorage.app",
    messagingSenderId: "1016040720741",
    appId: "1:1016040720741:web:94bbdbcff47e1d9eb6398c",
    measurementId: "G-3L0XBGZZY5"
  };

// Inicializa la app de Firebase
const app = initializeApp(firebaseConfig);

// Exporta la base de datos
export const db = getFirestore(app);
