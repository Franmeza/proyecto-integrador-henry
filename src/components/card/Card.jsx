import styles from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Card (props) { 
  
   return (
     <div className={styles.cardContainer}>
       <button onClick={() => props.onClose(props.id)} className={` ${styles.closeButton} fa-regular fa-trash-can fa-lg` } ></button>
       <img src={props.image} alt="imagen" />
       <div className={styles.data}>
       <Link className={styles.link}  to={`/detail/${props.id}` }><h2 className={styles.nombre}>{props.name}</h2></Link>
       <h2><strong>Status: </strong>{props.status}</h2>
       <h2><strong>Species: </strong>{props.species}</h2>
       <h2><strong>Gender: </strong>{props.gender}</h2>
       <h2><strong>Origin: </strong>{props.origin}</h2>
       </div>
       
     </div>
   );
}
