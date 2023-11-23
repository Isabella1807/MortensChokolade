
import { collection, addDoc } from "firebase/firestore";
import myDB from "./DB";

export const isaTestAddDoc = async () => {
    try {
        const docRef = await addDoc(collection(myDB, "myTest"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
