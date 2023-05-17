import React from 'react';
import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/navBar/NavBar';
import axios from 'axios';

function App() {
 
   const [characters, setCharacters] = useState([])
   
   function onSearch(id) {
      if (characters.some((char) => char.id === parseInt(id)))
       return alert (`El personaje con id ${id} ya ha sido agregado`)

      axios (`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {            
            setCharacters([...characters, data]);
         } 
      }).catch((error) => alert('El id ingresado no es valido, por favor ingrese un numero entre 1 y 826',error))
   }

   const onClose = (id) => {
      const resultado = characters.filter((character) => character.id  !== parseInt(id))
      setCharacters(resultado)
   }
  

   return (       
      <div className='App'>         
         <NavBar onSearch = {onSearch}  />
         <Cards characters={characters} onClose={onClose}/>       
        
      </div>
   );
}

export default App;
