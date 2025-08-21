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
        className='rounded-full px-4 py-2 bg-yellow-100 text-sm placeholder:text-stone-400 sm:w-64 focus:w-72
         focus:ring-yellow-400 focus:ring-opacity-50 transition-all duration-300 w-28 md:px4'
    />
    
    
    </form>
  );
}
