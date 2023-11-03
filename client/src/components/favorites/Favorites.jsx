import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import styles from "../cards/Cards.module.css";
import style from "./Favorites.module.css";
import { filterCards, orderCards, showAll } from "../../redux/actions";

function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  function handleOrder(e) {
    setAux(!aux);
    dispatch(orderCards(e.target.value));
  }
  function handleFilter(e) {
    if (e.target.value === "All") dispatch(showAll());
    else dispatch(filterCards(e.target.value));
  }

  // console.log('favs',props.myFavorites);
  // console.log('props', props);
  return (
    <>
      <div className={style.selectContainer}>
        <select name="" id="" onChange={handleOrder}>
          <option value="">Select Order</option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select name="" id="" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
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
              origin={fav.origin}
              image={fav.image}
              onClose={fav.onClose}
            />
          );
        })}
      </div>
    </>
  );
}

// function mapStateToProps(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

export default Favorites;
