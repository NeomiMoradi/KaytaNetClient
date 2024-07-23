import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const HandleFile = ({fileName, key}) => {

    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");
    const [downloadURL, setDownloadURL] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setUploadStatus("Please select a file first.");
            return;
        }

        const storageRef = ref(storage, `files/${file.name}`);
        try {
            await uploadBytes(storageRef, file);
            setUploadStatus("File uploaded successfully!");
            const url = await getDownloadURL(storageRef);
            setDownloadURL(url);
        } catch (error) {
            console.error("Error uploading file:", error);
            setUploadStatus("Error uploading file." + error);
        }
    };

    return <div key={key}>
        <input type="file" label={`בחר ${fileName}  `} onChange={handleFileChange} />
        <button onClick={handleUpload}>{`העלה ${fileName}  `}</button>
        <p>{uploadStatus}</p>
        {downloadURL && (
            <div>
                <h2>Download URL:</h2>
                <a href={downloadURL} target="_blank" rel="noopener noreferrer">{downloadURL}</a>
            </div>
        )}
    </div>
}
export default HandleFile