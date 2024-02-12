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
    const db = getFirestore(app); // Get a Firestore instance
    
    // handle-form
    const form = document.querySelector("form#firebase-form");

    async function handleForm(event) {
        // cambiar los estilos
        const button = document.querySelector("button#submit");
        button.disabled = true;

        event.preventDefault();

        const form_data = new FormData(event.target);
        const form_value = Object.fromEntries(form_data);
        
        // Define the collection and document data
        const requests_collection = collection(db, 'requests');

        // Add the document to the collection
        const doc_Ref = await addDoc(requests_collection, form_value);
        
        //debugging purposes
        // console.log(`Form:`);
        // console.dir(form_value);
        // console.log(`Document added to the database with the id of:`);
        // console.dir(doc_Ref);
    }

    form.addEventListener('submit', handleForm); //event-listener
