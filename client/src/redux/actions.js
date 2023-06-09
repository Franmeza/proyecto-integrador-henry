import axios from 'axios'
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const SHOW_ALL = 'SHOW_ALL'

export function addFav (character){
  
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAV',
             payload: data,
          });
       });
    };
};

export function removeFav (id){
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;                               
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {          
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
            });
       });
       
    };
}

export function filterCards (gender){
    return {type: FILTER, payload: gender}
}

export function orderCards (order){
    return {type: ORDER, payload: order}
}

export function showAll(){
    return {type: SHOW_ALL}
}