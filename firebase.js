    import { initializeApp } from 'firebase/app';
    import { getFirestore, collection, addDoc } from 'firebase/firestore';

    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBPxt4q8qWRojTLWhP0W7iqDsyM1KpZSW4",
        authDomain: "ht-playground-ab9e1.firebaseapp.com",
        projectId: "ht-playground-ab9e1",
        storageBucket: "ht-playground-ab9e1.appspot.com",
    };
    const app = initializeApp(firebaseConfig); // Connection 
    export const db = getFirestore(app); // Get a Firestore instance
