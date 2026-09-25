import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDhe_m3wB5CyDktGJcwQZP7kmIFjZrDx2k",
    authDomain: "ftsee-777.firebaseapp.com",
    databaseURL: "https://ftsee-777-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ftsee-777",
    storageBucket: "ftsee-777.firebasestorage.app",
    messagingSenderId: "812545382222",
    appId: "1:812545382222:web:4e96e485f85c3caa4d301f",
    measurementId: "G-DH34RP890M"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, collection, query, where, getDocs, doc, deleteDoc };

