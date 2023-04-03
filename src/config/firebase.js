
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: "AIzaSyBcC9DDs2aaMcqQHqkpjgFXSzBWTqIVS_U",
	authDomain: "tiktok---jornada-e7424.firebaseapp.com",
	projectId: "tiktok---jornada-e7424",
	storageBucket: "tiktok---jornada-e7424.appspot.com",
	messagingSenderId: "930135772628",
	appId: "1:930135772628:web:80674f667875d95b7a9a41"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;