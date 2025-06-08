import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import FileUpload from './components/FileUpload';
import MatchResults from './pages/MatchResults';
import JobBoard from './pages/JobBoard';

function app(){
  const [darkMode, setDarkMode]=useState(false);
  return(
    <div className={darkMode?'dark':'light'}>
    <Router>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className="container mt-4">
      <Routes>
        <Route path="/" element={<UploadPage />}/>
        <Route path="/results" element={<MatchResults />}/>
        <Route path="/jobs" element={<JobBoard />} />
        </Routes>
        </div>
      </Router>
      </div>
      );
    }
export default App;
