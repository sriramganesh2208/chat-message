import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyACuI-Ik1iA4YqfJYkhLXL3sUPOLhcNkA8",
    authDomain: "chat-company-project.firebaseapp.com",
    projectId: "chat-company-project",
    storageBucket: "chat-company-project.appspot.com",
    messagingSenderId: "264586897282",
    appId: "1:264586897282:web:2685db83aa931e5a8bd19b",
    measurementId: "G-1ZC0V608NK"
  };


// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);

const db =app.firestore();

const auth =firebase.auth();

const provider =new firebase.auth.GoogleAuthProvider();

export {auth,provider};

export default db