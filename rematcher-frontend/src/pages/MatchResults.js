import React, { useContext } from 'react';
import { ResultsContext } from '../context/ResultsContext';

const MatchResults = () => {
    const { results } = useContext(ResultsContext);
    if (!results) {
        return <p>No baddie info yet gng, upload something</p>;
    }
    const { resume_text, matched_skills, message, job } = results;
    return (
        <div className='container mt-4'>
            <h2>Matched Results</h2>

            {resume_text && (
                <>
                    <h4>Resume Text</h4>
                    <pre>{resume_text}</pre>
                    <h4>Matched Skills</h4>
                    <ul>
                        {matched_skills.map(([skill, cat], i) => (
                            <li key={i}>{skill} ({cat})</li>
                        ))}
                    </ul>
                </>
            )}
            {message && job && (
                <>
                    <h4>{message}</h4>
                    <p><strong>{job.title} @ {job.company}</strong></p>
                    <p>{job.description}</p>
                    <strong>Job Skills:</strong> {job.skills.join(', ')}
                </>
            )}
        </div>
    );
};

export default MatchResults;
