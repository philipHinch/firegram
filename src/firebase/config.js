import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsW_6-OlAUhnnZtmxggWxkx1M2cCJKZAY",
    authDomain: "firegram-1142f.firebaseapp.com",
    projectId: "firegram-1142f",
    storageBucket: "firegram-1142f.appspot.com",
    messagingSenderId: "411380894093",
    appId: "1:411380894093:web:03cd3652912993b70415c4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const projectStorage = getStorage();
const projectFirestore = getFirestore();

export { projectStorage, projectFirestore };