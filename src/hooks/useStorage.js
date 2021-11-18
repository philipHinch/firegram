import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, setDoc, Timestamp } from "firebase/firestore";
import { projectStorage, projectFirestore } from "../firebase/config";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const date = Timestamp.fromDate(new Date());

    useEffect(() => {
        const storageRef = ref(projectStorage, file.name);
        const uploadImages = uploadBytesResumable(storageRef, file);

        uploadImages.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            await getDownloadURL(uploadImages.snapshot.ref).then((downloadUrl) => {
                const collectionRef = addDoc(collection(projectFirestore, "images"), {
                    name: file.name,
                    url: downloadUrl,
                    addedAt: date,
                });
                setUrl(downloadUrl);
            });

        })
    }, [file, collection, addDoc, setDoc])

    return { progress, error, url }
}

export default useStorage;