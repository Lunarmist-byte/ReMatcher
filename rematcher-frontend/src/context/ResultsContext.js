import React,{Children, createContext, useState} from "react";
export const ResultsContext=createContext();
export const ResultsProvider=({children})=>{
    const[results,setResults]=useState(null);
    return(
        <ResultsContext.Provider value={{results, setResults}}>
            {Children}
        </ResultsContext.Provider>
    );
};
