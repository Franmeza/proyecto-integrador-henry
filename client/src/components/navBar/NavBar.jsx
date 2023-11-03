import SearchBar from "../searchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import titulo from "./Rick-and-Morty.png";

export default function NavBar(props) {
  const location = useLocation();

  const addRandomCharacter = () => {
    props.onSearch(Math.floor(Math.random() * 826 + 1));
    //  console.log(idRandom);
  };
  return (
    <div className={styles.navbar}>
      {/* <h1>Rick And Morty</h1> */}
      <img src={titulo} alt="fondo" />
      <div className={styles.buttonContainer}>
        <Link to="/home">
          <button
            className={location.pathname === "/home" && styles.homeButton}
          >
            Home
          </button>
        </Link>
        <Link to="/about">
          <button
            className={location.pathname === "/about" && styles.aboutButton}
          >
            About
          </button>
        </Link>
        <Link to="/favorites">
          <button
            className={
              location.pathname === "/favorites" && styles.favoritesButton
            }
          >
            Favorites
          </button>
        </Link>
      </div>
      <div>
        <button className={styles.logout} onClick={props.logout}>
          Logout
        </button>
      </div>
      {location.pathname === "/home" ? (
        <SearchBar
          onSearch={props.onSearch}
          randomId={addRandomCharacter}
        ></SearchBar>
      ) : null}
    </div>
  );
}
