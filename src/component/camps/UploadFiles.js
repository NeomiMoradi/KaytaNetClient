// src/App.js
import React, { useState } from "react";
import HandleFile from "../HandleFile";

const UploadFiles = () => {

    const files = ['חוזה', 'אישורי משטרה', 'רשימת צוות', 'אישור מפעילים']

    return (
        <div>
            {/* <h1></h1> */}
            {files.map((file, index) => {
                return <HandleFile
                    key={index}
                    fileName={file}
                ></HandleFile>
            })}
        </div>
    );
};

export default UploadFiles;
