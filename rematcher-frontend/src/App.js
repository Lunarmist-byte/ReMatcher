import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UploadPage from './pages/UploadPage';
import MatchResults from './pages/MatchResults';
import JobBoard from './pages/JobBoard';

function app(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage />}/>
        <Route path="/results" element={<MatchResults />}/>
        <Route path="/jobs" element={<JobBoard />} />
        </Routes>
      </Router>
      );
    }
export default App;
