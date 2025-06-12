import React,{useState} from 'react';
import axios from 'axios';
const AdminMatch=()=>{
    const[matches, setMatches]=useState([]);
    const[error, setError]=useState('');

    const fetchMatches=async()=>{
        try{
            const res=await axios.get('http://localhost:5000/match',{
                headers: {
                    Authorization: 'Bearer supersecuretokenlol'
                }
            });
            setMatches(res.data.matches ||[]);
        } catch(err){
            setError("couldn't fetch bro");
            console.error(err);
        }
    };
    return(
        <div className='contanier mt-4'>
            <h3>Top Matches</h3>
            <button className='btn btn-dark mb-3' onClick={fetchMatches}>
                Fetch Match Results
            </button>
            {error && <p className='text-danger'>{error}</p>}
            {matches.length>0 &&(
                <ul className='list-group'>
                    {matches.map((m,i)=>(
                        <li className='list-group-item' key={i}>
                            <h5>{m.job.title}@{m.job.company}</h5>
                            <p>{m.job.description}</p>
                            <strong>Score:</strong>{m.score.toFixed(2)}
                        </li>
                    ))}
                </ul>
            )}
        </div>

    );

};
export default AdminMatch;