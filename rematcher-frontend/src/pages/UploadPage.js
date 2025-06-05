import React from 'react';
import FileUpload from '../components/FileUpload';

const UploadPage=()=> {
    return(
        <div className='container mt-4'>
            <h2>Upload Resume/Job Description </h2>
            <FileUpload/>
        </div>
    );
};
export default UploadPage;