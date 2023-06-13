import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"

const Detail = ()=> {
   
    
    const {id} = useParams()
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter({ 
                name: data.name,
                status: data.status,
                species: data.species,
                gender: data.gender,
                origin: data.origin.name,
                image:data.image
            });
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
     return(
        <div className={styles.containerDetail}>
        <img src={character.image} alt="imagen" />
        <section className={styles.info}>
            <h2><strong>NAME</strong></h2>
            <h2>{character.name}</h2>
            <h2><strong>Status: </strong>{character.status}</h2>
            <h2><strong>Species: </strong>{character.species}</h2>            
            <h2><strong>Gender: </strong>{character.gender}</h2>
            <h2><strong>Origin: </strong>{character.origin}</h2>        
        </section>       
        </div>
     ) 
}

export default Detail;