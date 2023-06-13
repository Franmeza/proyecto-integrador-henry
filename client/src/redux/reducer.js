import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, SHOW_ALL } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (myFavorite) => myFavorite.id !== parseInt(action.payload)
        ),
      };
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter((character) => {
          return character.gender === action.payload;
        }),
      };

    case ORDER:
      return {
        ...state,
        myFavorites: state.allCharacters.sort((a, b) => {
          if (action.payload === "A") return a.id - b.id;

          if (action.payload === "D") return b.id - a.id;

          return 0;
          //se peude resumir  payload ===A ? a.id - b.id : b.id - a.id
        }),
      };
    case SHOW_ALL:
      return {...state, myFavorites: state.allCharacters} ;

    default:
      return { ...state };
  }
}

export default rootReducer;
