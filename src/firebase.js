import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBR-UYVbs3CvM9JO6oqq_A67kXe2_YrvsA",
        authDomain: "wesharenew-7b64f.firebaseapp.com",
        projectId: "wesharenew-7b64f",
        storageBucket: "wesharenew-7b64f.appspot.com",
        messagingSenderId: "755365761593",
        appId: "1:755365761593:web:91ef8c55e1cbc57e92b3e8",
        measurementId: "G-ZWT1Q53X7H"
    }
);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
export { auth,db,storage };
