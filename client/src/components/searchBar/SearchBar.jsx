import React from 'react';
import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {
   
   const [id, setId] = useState('');
 
   function handleChange(event)  {
      setId(event.target.value)      
   } 

   return (
      <div className={styles.searchbar}>
         <input id="search-bar" type='search' value={id} placeholder='Ingrese el ID ' onChange={handleChange}/>
         <button className={styles.buttonAdd } onClick={() =>{props.onSearch(id); setId('')}} >Agregar</button>   
         <button  className={styles.buttonRandom} onClick={ props.randomId }><i className={"fa-solid fa-shuffle"} ></i>Random ID</button>   
      </div>
   );
}
