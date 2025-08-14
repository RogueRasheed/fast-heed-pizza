import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



export default function SearchOrder() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if(!query) return;
        // Logic to search for orders based on the query
        navigate(`/order/${query}`);
        setQuery("");
    }
    
    return (
    <form onSubmit={handleSubmit}>
    <input
        placeholder="Search order by ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
    />
    
    
    </form>
  );
}
