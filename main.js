import { db } from "./firebase.js"
import { collection, addDoc } from 'firebase/firestore';

// handle-form
const form = document.querySelector("form#firebase-form");

form.addEventListener('submit', async (event) => { //submit event-listener
    event.preventDefault();
    let valid = true;
    // const { value } = input;
    // const valid =  /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g.test(value);
    
    // button state
    const form_data = new FormData(event.target);
    const form_value = Object.fromEntries(form_data);
    
    let doc_Ref;

    if (valid) {
        // Define the collection and document data
        const requests_collection = collection(db, 'requests');
        try {  // Adding the document to the collection
            doc_Ref = await addDoc(requests_collection, form_value);
            console.log("You logged your document succesfully");
            console.log(doc_Ref);
            // if request doesn't prompt an error
            const button = document.querySelector("button#submit");
            button.disabled = true;
        } catch (err) {
            console.error("Error sending form: ", err);
        }
    }else {
        console.log('your form is not valid yet');
    }
    //debugging purposes
    console.log(`Form:`);
    console.dir(form_value);
    console.log(`Document added to the database with the id of:`);
    console.dir(doc_Ref);
}); 