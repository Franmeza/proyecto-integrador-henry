import styles from "./Card.module.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFav,removeFav } from "../../redux/actions";

function Card (props) { 
  
  const[isFav, setIsFav] = useState(false)

  const myFavorites = useSelector((state)=> state.myFavorites)
  const dispatch = useDispatch()  

  function handleFavorite (){
    if(isFav){
      setIsFav(false)      
      dispatch(removeFav(props.id))
    } 
    if(!isFav) {
      setIsFav(true)        
      dispatch(addFav(props))
        }  
    
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

   return (
     <div className={styles.cardContainer}>
      
       {isFav ? (
         <button onClick={handleFavorite}>❤️</button>
        ) : (
         <button  onClick={handleFavorite}>🤍</button>
        )}
       <button
         onClick={() => props.onClose(props.id)}
         className={` ${styles.closeButton} fa-regular fa-trash-can fa-lg`}
       ></button>
       <img src={props.image} alt="imagen" />
       <div className={styles.data}>
         <Link className={styles.link} to={`/detail/${props.id}`}>
           <h2 className={styles.nombre}>{props.name}</h2>
         </Link>
         <h2>
           <strong>Status: </strong>
           {props.status}
         </h2>
         <h2>
           <strong>Species: </strong>
           {props.species}
         </h2>
         <h2>
           <strong>Gender: </strong>
           {props.gender}
         </h2>
         <h2>
           <strong>Origin: </strong>
           {props.origin}
         </h2>
       </div>
     </div>
   );
}

// function mapStateToProps(state){
//   return{
//     myFavorites: state.myFavorites
//   }
// };

// function mapDispatchToProps(dispatch) {
//   return{
//     addFav: (props) =>{
//       dispatch(addFav(props))
//     },
//     removeFav: (id) => {
//       dispatch(removeFav(id))
//     }
//   }
// };

export default Card;