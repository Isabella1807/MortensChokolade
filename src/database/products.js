import {addDoc, collection, getDocs, where, query} from "firebase/firestore";
import myDB from "./DB";

const productsCollection = "products";

const getAllProducts = async(myCategory) => {
    const result = [];

    let myQuery;
    if (myCategory) {
        myQuery = query(collection(myDB, productsCollection), where("category", "==", myCategory));
    } else {
        myQuery = collection(myDB, productsCollection);
    }

    await getDocs(myQuery)
        //.then & .catch tager ét paramter som er en callback funktion
        .then((allProducts) => {
            allProducts.forEach((product) => {
                //Super grim data, vi "spreader" product.data og tilføjer et id og gemmer så alle dokumenterne med et id igen i en ny liste.
                result.push({
                    ...product.data(),
                    id: product.id,
                });
            });
        }).catch(() => {
            console.log("getAllProducts fejlede");
        });

    return result;
}

const addNewProduct = async(title, frontImage, extraImages, description, price, category) => {
    await addDoc(collection(myDB, productsCollection), {
        title,
        frontImage,
        extraImages,
        description,
        price,
        category,
    }).then((a) => {
        console.log("Document written with ID: ", a);
    }).catch((e) => {
        console.error("Error adding document: ", e);
    });
}

const editProduct = () => {

}

const deleteProduct = () => {

}

export default {
    getAllProducts,
    addNewProduct,
    editProduct,
    deleteProduct,
}