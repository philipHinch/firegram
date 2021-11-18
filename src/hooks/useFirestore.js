import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, query, onSnapshot } from "firebase/firestore";

const useFirestore = (coll) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const q = query(collection(projectFirestore, coll));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            const orderedDocs = documents.sort((a, b) => a.addedAt < b.addedAt && 1 || -1)
            setDocs(orderedDocs);
        })
        return () => unsub();
    }, [coll])

    return { docs };
}

export default useFirestore;