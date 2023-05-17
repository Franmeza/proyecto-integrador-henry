import styles from "./Card.module.css";
import React from "react";

export default function Card (props) { 
  
   return (
     <div className={styles.cardContainer}>
       <button onClick={() => props.onClose(props.id)} className={styles.closeButton}>X</button>
       <img src={props.image} alt="imagen" />
       <div className={styles.data}>
       <h2 className={styles.nombre}>{props.name}</h2>
       <h2><strong>Status: </strong>{props.status}</h2>
       <h2><strong>Species: </strong>{props.species}</h2>
       <h2><strong>Gender: </strong>{props.gender}</h2>
       <h2><strong>Origin: </strong>{props.origin}</h2>
       </div>
       
     </div>
   );
}
