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
         <input id="search-bar" type='search' onChange={handleChange}/>
         <button className={styles.buttonAdd} onClick={() =>props.onSearch(id)}>Agregar</button>   
         <button  className={styles.buttonRandom} onClick={ props.randomId }>Random ID</button>   
      </div>
   );
}
