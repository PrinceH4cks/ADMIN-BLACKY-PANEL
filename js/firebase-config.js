import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCHelUmRqvdXZJs0pCTIUXJ_HRkEkb-PmY",
    authDomain: "as-crazy-dfab1.firebaseapp.com",
    databaseURL: "https://as-crazy-dfab1-default-rtdb.firebaseio.com",
    projectId: "as-crazy-dfab1",
    storageBucket: "as-crazy-dfab1.firebasestorage.app",
    messagingSenderId: "885000552610",
    appId: "1:885000552610:web:55aa2a42ee047e336557fb",
    measurementId: "G-4H6L2FWXET"
};

const app = initializeApp(firebaseConfig);

let analytics = null;
try {
    analytics = getAnalytics(app);
} catch (e) {
    analytics = null;
}

const db = getDatabase(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
