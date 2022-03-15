
import axios from 'axios';
import { useEffect, useState } from 'react';
import LocationInfo from './Components/LocationInfo';
import SearchBox from './Components/SearchBox';
import ResidentList from './Components/ResidentList';
import ToggleDarkMode from './Components/ToggleDarkMode/ToggleDarkMode';
import './App.css';


function App() {

  const [location, setLocation]= useState({})
  const [isLoading, setIsLoading]= useState(true)
  const[isDark, setIsDark]= useState(true)

  useEffect(()=>{
   const random = Math.floor(Math.random()*126)+1;
   axios.get(`https://rickandmortyapi.com/api/location/${random}`)
   .then(res=>{
     setLocation(res.data)
     setIsLoading(false)
    })
  },[])


  return (
    <div className={isDark? "dark-mode": "light-mode"}>
      <div className='banner'></div>
      <main className='container'>
        <div className='container-tittle'>

      <h1>Rick and Morty  API </h1>
      <ToggleDarkMode setIsDark={setIsDark} isDark={isDark}/>
        </div>
      <SearchBox setLocation={setLocation}/>
      <LocationInfo location={location}/>
      <ResidentList location={location} residentsUrl={location.residents} isLoading={isLoading}/>
      </main>
     
     
    </div>
  );
}

export default App;
