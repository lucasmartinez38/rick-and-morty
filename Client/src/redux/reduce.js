import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  // REMOVE_CHARACTER,
  // ADD_CHARACTERS,
  // RESET_CHARACTER,
  // RESET,
} from "./action-types";

// import {
//   ADD_FAV,
//   REMOVE_FAV,
//   FILTER,
//   ORDER,

//   // 

//   // NEXT_PAGE,
//   // PREV_PAGE,
//   // HANDLE_NUMBER,
//   // ADD_LOCATION,
//   // SEARCH_CHARACTER,
//   // RESET_CHARACTER,
// } from "./action/type";


const initialState = {
  // location: [],
  // numPage: 1,
  // charactersOrigin: [],
  // characters: [],
  data: [],
  myFavorites: [],
  myAllFavorites: [],
};



const reducer = (state = initialState, { type, payload }) => {
     switch (type) {
       
      //  case RESET:
      //    return {
      //      ...state,
      //      myFavorites: [...state.myAllFavorites],
      //    };
      //  case ADD_CHARACTERS:
      //    if (Array.isArray(payload)) {
      //      return {
      //        ...state,
      //        charactersOrigin: [...payload],
      //        characters: [...payload],
      //      };
      //    }
      //  case REMOVE_CHARACTER:
      //    const newCharacter = state.myAllFavorites.filter(
      //      (ch) => ch.id !== payload
      //      );
      //      return {
      //        ...state,
      //        myFavorites: newCharacter,
      //        myAllFavorites: newCharacter,
      //       };
            
            case ADD_FAV:
        //  console.log("payload", myFavorites);
         return {
           ...state,
           myFavorites: [...state.myFavorites, payload],
           myAllFavorites: [...state.myAllFavorites, payload],
          };
       case REMOVE_FAV:
         const newFavorites = state.myFavorites.filter(
           (ch) => ch.id !== payload
         );
         return {
           ...state,
           myFavorites: newFavorites,
           myAllFavorites: payload,
         };
       case FILTER:
         const newFilter = state.myAllFavorites.filter(
           (ch) => ch.gender === payload
         );
         return {
           ...state,
           myFavorites: newFilter,
         };
       case ORDER:
         const newOrder = state.myAllFavorites.sort((a, b) => {
           if (a.id > b.id) {
             return "Ascendente" === payload ? 1 : -1;
           }
           if (a.id < b.id) {
             return "Descendente" === payload ? 1 : -1;
           }
           return 0;
         });
         return {
           ...state,
           myFavorites: newOrder,
         };
      //  case RESET_CHARACTER:
      //    return {
      //      ...state,
      //      characters: [...state.charactersOrigin],
      //    };

       default:
         return {...state};
     }
    
}
export default reducer;

/////////////////////////////////////////////////////////////////////////////////
       //  case ADD_LOCATION:
       //    return {
       //      ...state,
       //      location: [...state.location, payload],
       //    };
       //  case SEARCH_CHARACTER:
       //    return {
       //      ...state,
       //      characters: [payload],
       //    };
       //  case HANDLE_NUMBER:
       //    return {
       //      ...state,
       //      numPage: payload,
       //    };
       //  case NEXT_PAGE:
       //    return {
       //      ...state,
       //      numPage: state.numPage + 1,
       //    };
       //  case PREV_PAGE:
       //    return {
       //      ...state,
       //      numPage: state.numPage - 1,
       //    };
