import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDWnnHZD9BvTr7sugkt9MkL0sST4d20ef0",
  authDomain: "disney-clone-c999a.firebaseapp.com",
  projectId: "disney-clone-c999a",
  storageBucket: "disney-clone-c999a.appspot.com",
  messagingSenderId: "493862222668",
  appId: "1:493862222668:web:33addf2cd3e5537c67ede9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;