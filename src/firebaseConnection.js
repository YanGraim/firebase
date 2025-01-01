import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAxtCLPWarE662dtKcwRFpo1OJYs1lhyfM",
    authDomain: "learnfirebase-cde8b.firebaseapp.com",
    projectId: "learnfirebase-cde8b",
    storageBucket: "learnfirebase-cde8b.firebasestorage.app",
    messagingSenderId: "262916389588",
    appId: "1:262916389588:web:0ac18e5dd244ad9eba5941",
    measurementId: "G-P8D764MV6N"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth };