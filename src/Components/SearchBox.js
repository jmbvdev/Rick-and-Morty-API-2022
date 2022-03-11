import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ({setLocation}) => {

    const[locationId, setLocationId]= useState("")
    const searchType=()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${locationId}`)
        .then(res=>setLocation(res.data))
    }

    return (
        <div className='searchBox'>
            <div><input type="text" placeholder='type a location id' onChange={e=>setLocationId(e.target.value)} value={locationId}/></div>
            <div><button onClick={searchType}>Search</button></div>
        </div>
    );
};

export default SearchBox;