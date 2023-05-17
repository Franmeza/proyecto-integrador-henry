import SearchBar from '../searchBar/SearchBar'
import styles from './NavBar.module.css'


export default function NavBar (props){

     
   const addRandomCharacter = () => {
    props.onSearch (Math.floor(Math.random() * (826) + 1))
    
//  console.log(idRandom);
 } 
    return (
        <div className={styles.navbar}>
            <h1>Rick And Morty</h1>
            <SearchBar onSearch ={props.onSearch} randomId = {addRandomCharacter}></SearchBar>
        </div>
        
    );
}