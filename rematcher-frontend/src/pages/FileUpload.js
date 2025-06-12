import React, { useContext, useState } from 'react';
import axios from 'axios';
import {ResultsContext} from '../context/ResultsContext';

const FileUpload=()=>{

 const [file, setFile]=useState(null);
 const [fileType, setFileType]=useState('resume');
 const [response, setResults]=useContext(ResultsContext);

 const handleupload=async()=>{
    if (!file) return alert('Gng upload something fr');

    const formData=new FormData();
    formData.append('file',file);
    formData.append('file_type',fileType);

    try{
        const res=await axios.post('http://localhost:5000/upload',formData);
        setResponse(res.data);
    } catch(err){
        alert('sorry gng code lazy');
        console.error(err);
    }
 }

 return(
    <div>
      <div className="mb-3">
        <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <div className="mb-3">
        <select className="form-select" value={fileType} onChange={(e) => setFileType(e.target.value)}>
          <option value="resume">Resume</option>
          <option value="job">Job Description</option>
        </select>
      </div>
      <button className="btn btn-primary"onClick={handleupload}>Upload</button>

      {response && (
        <div className="mt-4">
          <h5>Response:</h5>
          <pre style={{ whiteSpace:'pre-wrap'}}>{JSON.stringify(response,null,2)}</pre>
        </div>
      )}
    </div>
 );
};

export default FileUpload;
