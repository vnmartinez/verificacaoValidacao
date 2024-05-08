const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyD2oUCvGSVasW5xpLgIoQ9rNu9d-j9OX4A",
    authDomain: "verifvalid-83962.firebaseapp.com",
    projectId: "verifvalid-83962",
    storageBucket: "verifvalid-83962.appspot.com",
    messagingSenderId: "1044123933239",
    appId: "1:1044123933239:web:84b42ed1f3bad0496e3db2",
    measurementId: "G-PC910NNL9S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addDocToCollection = async () => {
    try {
        const docRef = await addDoc(collection(db, "integracao"), {
            testField: "integracao"
        });
        console.log("Teste de integração com o Firebase: ", docRef.id);
    } catch (e) {
        console.error("Erro de integração: ", e);
    }
};

addDocToCollection();
