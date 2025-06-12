import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

const LoginPage=()=>{
    const[password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleLogin=()=>{
        if(pw='admin123'){
            localStorage.setItem('authToekn','supersecuretokenlol');
            navigate('/admin/match');
        }else alert('nah no aura wrong ahh pass')
        };
        return(
            <div className='container mt-4'>
                <h3>Admin Login</h3>
                <input
                type="password"
                className='form-control mb-3'
                placeholder='Enter admin password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button className='btn btn-dark' onClick={handleLogin}>
                Login
            </button>
            </div>
        );
    };

    export default LoginPage;
