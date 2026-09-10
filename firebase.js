import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhe_m3wB5CyDktGJcwQZP7kmIFjZrDx2k",
  authDomain: "ftsee-777.firebaseapp.com",
  projectId: "ftsee-777",
  storageBucket: "ftsee-777.firebasestorage.app",
  messagingSenderId: "812545382222",
  appId: "1:812545382222:web:fa171bc9bd6003244d301f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

