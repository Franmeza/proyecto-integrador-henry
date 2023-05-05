export default function SearchBar(props) {
   
   return (
      <div>
         <input id="search-bar" type='search'/>
         <button onClick={props.onSearch}>Agregar</button>
      
      </div>
   );
}
