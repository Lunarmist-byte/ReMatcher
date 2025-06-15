import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import FileUpload from './components/FileUpload';
import MatchResults from './pages/MatchResults';
import UploadPage from './pages/UploadPage';
import JobBoard from './pages/JobBoard';
import AdminMatch from './pages/AdminMatch';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App(){
  const [darkMode, setDarkMode]=useState(false);
  return(
    <div className={darkMode?'dark':'light'}>
    <Router>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className="container mt-4">
      <Routes>
        <Route path="/admin/login" element={<LoginPage/>}/>
        <Route path="/admin/match" element={<PrivateRoute><AdminMatch/></PrivateRoute>}
        />
        <Route path="/" element={<UploadPage />}/>
        <Route path="/results" element={<MatchResults />}/>
        <Route path="/jobs" element={<JobBoard />} />
        <Route path="/admin/match" element={<AdminMatch/>}/>
        </Routes>
        </div>
      </Router>
      </div>
      );
    }
export default App;
