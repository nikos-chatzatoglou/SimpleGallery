import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { doc, getDoc, getDocs } from "firebase/firestore";

export const add_to_firebase = async () => {
	try {
		const docRef = await addDoc(collection(db, "users"), {
			first: "Mitsakos",
			last: "V0thron",
			born: 1815,
		});
		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};

export const read_data = async () => {
	const docRef = doc(db, "Photos", "Photo1");
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		console.log("Document data:", docSnap.data());
	} else {
		// doc.data() will be undefined in this case
		console.log("No such document!");
	}
};

export const read_collection = async () => {
	const data = [];
	const querySnapshot = await getDocs(collection(db, "Gallery"));
	querySnapshot.forEach((doc) => {
		data.push(doc.data());
	});
	console.log(data[1].Link);
};
