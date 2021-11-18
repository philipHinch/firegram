import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {

    const types = ['image/png', 'image/jpeg', 'image/jpg']

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        let selected = e.target.files[0]
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('')
        } else {
            setFile(null)
            setError('Please select an image file (png, jpeg or jpg)')
        }
    }

    return (

        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>

    );
}

export default UploadForm;