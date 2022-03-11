
import axios from 'axios';
import { useEffect, useState } from 'react';
import LocationInfo from './Components/LocationInfo';
import SearchBox from './Components/SearchBox';
import './App.css';
import ResidentList from './Components/ResidentList';

function App() {

  const [location, setLocation]= useState({})
  const [isLoading, setIsLoading]= useState(true)

  useEffect(()=>{
   const random = Math.floor(Math.random()*126)+1;
   axios.get(`https://rickandmortyapi.com/api/location/${random}`)
   .then(res=>{
     setLocation(res.data)
     setIsLoading(false)
    })
  },[])

 

  return (
    <div className="app">
      <div className='banner'></div>
      <main className='container'>
      <h1>Rick and Morty  API</h1>
      <SearchBox setLocation={setLocation}/>
      <LocationInfo location={location}/>
      <ResidentList location={location} residentsUrl={location.residents} isLoading={isLoading}/>

      </main>
     
    </div>
  );
}

export default App;
