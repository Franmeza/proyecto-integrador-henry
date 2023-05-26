import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import styles from "../cards/Cards.module.css"
function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites)

  // console.log('favs',props.myFavorites);
  // console.log('props', props);
  return (
    <div className={styles.container}>
      {myFavorites.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            origin={fav.origin.name}
            image={fav.image}
            onClose = {fav.onClose}            
          />
        );
      })}
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

export default Favorites;
