import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMFqiFr-VEnDqW8FDfiEdPudY3K7MwZoI",
    authDomain: "employee-management-a92b5.firebaseapp.com",
    projectId: "employee-management-a92b5",
    storageBucket: "employee-management-a92b5.appspot.com",
    messagingSenderId: "1049849278885",
    appId: "1:1049849278885:web:490c4d46db5a107270b84c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
