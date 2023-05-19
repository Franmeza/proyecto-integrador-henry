import SearchBar from '../searchBar/SearchBar'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import titulo from  "./Rick-and-Morty.png"

export default function NavBar (props){

     
   const addRandomCharacter = () => {
    props.onSearch (Math.floor(Math.random() * (826) + 1))
    
//  console.log(idRandom);
 } 
    return (
        <div className={styles.navbar}>
            {/* <h1>Rick And Morty</h1> */}
            <img src={titulo} alt="fondo" />
            <div className={styles.buttonContainer}>
            <Link to = "/home"><button>Home</button></Link>
            <Link to = "/about"><button>About</button></Link>
            </div>            
            
            <SearchBar onSearch ={props.onSearch} randomId = {addRandomCharacter}></SearchBar>
        </div>
        
    );
}