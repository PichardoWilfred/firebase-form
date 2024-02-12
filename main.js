// TODO: Replace the following with your app's Firebase project configuration

    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBPxt4q8qWRojTLWhP0W7iqDsyM1KpZSW4",
        authDomain: "ht-playground-ab9e1.firebaseapp.com",
        projectId: "ht-playground-ab9e1",
        storageBucket: "ht-playground-ab9e1.appspot.com",
        messagingSenderId: "363921436084",
        appId: "1:363921436084:web:cb0b4180c9246a4fe756e1",
        measurementId: "G-Y0K53QPDJ9"
    };
    const app = firebase.initializeApp(firebaseConfig);
    
    // handle-form
    const form = document.querySelector("form#firebase-form");
    function handleForm(event) {
        event.preventDefault();

        const form_data = new FormData(event.target);
        const form_value = Object.fromEntries(form_data);

        console.log(form_value);
        app.firestore().collection('/requests').add(form_value); // Solo admite objetos
        
        const button = document.querySelector("button#submit");
        button.disabled = true;
    } 

    form.addEventListener('submit', handleForm); //event-listener
