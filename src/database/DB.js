//Npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC86CO6SSjqIsQWBal7saC-hV_pAvQEY3M",
    authDomain: "mortenschokolade.firebaseapp.com",
    projectId: "mortenschokolade",
    storageBucket: "mortenschokolade.appspot.com",
    messagingSenderId: "427824695239",
    appId: "1:427824695239:web:603ac1fec0ad477fa13be2",
    measurementId: "G-18H1B9W5C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()

export default {
    methods: {
        async createUser() {
            // 'users' collection reference
            const colRef = collection(db, 'users')
            // data to send
            const dataObj = {
                firstName: 'John',
                lastName: 'Doe',
                dob: '1990'
            }

            // create document and return reference to it
            const docRef = await addDoc(colRef, dataObj)

            // access auto-generated ID with '.id'
            console.log('Document was created with ID:', docRef.id)
        }
    },
    created() {
        this.createUser()
    }
}
//
// export function useDB() {
//     const createProduct (title, subtitle, description, img_url, price) => {
//         addDoc
//     };
//     const deleteProduct(){};
//     const editProduct(){};
// }