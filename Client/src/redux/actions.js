import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  // ADD_CHARACTERS,
  // REMOVE_CHARACTER,
  // NEXT_PAGE,
  // PREV_PAGE,
  // ADD_LOCATION,
  // SEARCH_CHARACTER,
  // HANDLE_NUMBER,
  RESET_CHARACTER,
  RESET,
} from "./action-types";
// import {dispatch} from "./dispatch";
import axios from "axios";
////////////////////////////////////////////////////
// export const addLocation=(path)=> {
//   return {
//     type: ADD_LOCATION,
//     payload: path,
//   };
// }

////////////////////////////////////////////////////
// export const prevPage=() => {
//   return {
//     type: PREV_PAGE,
//   };
// }
////////////////////////////////////////////////////
// export const nextPage=() => {
//   return {
//     type: NEXT_PAGE,
//   };
// }
////////////////////////////////////////////////////
// export const handleNumber=(num)=> {
//   return {
//     type: HANDLE_NUMBER,
//     payload: num,
//   };
// }
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// export const addCharacters=(characters) => {
//   return {
//     type: ADD_CHARACTERS,
//     payload: characters,
//   };
// }
/////////////////////////////////////////////////////
// export const searchCharacter=(character)=> {
//   return {
//     type: SEARCH_CHARACTER,
//     payload: character,
//   };
// }
// ///////////////////////////////////////////////////////
// export const removeCharacter=(id)=> {
//   return {
//     type: REMOVE_CHARACTER,
//     payload: id,
//   };
// }
//////////////////////////////////////////////////////
export const addFav = (character) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav`;
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      // if(!data.length) throw Error("Not foun character")
      
      console.log(":::: :::::data", data.id);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log("addFav not found", error);
    }
  };
};
////////////////////////////////////////////////////

export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      if (!data.length) throw Error("No hay favoritos");
      return dispatch({
        type: REMOVE_FAV,
        payload: id,
      });
    } catch (error) {
      console.log("removeFav not found", error);
    }
  };
};
//////////////////////////////
// export function reset() {
//   return {
//     type: RESET,
//   };
// }
// ///////////////////////////////////////////////
export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
////////////////////////////////////////////////
export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
// // ///////////////////////////////////////////////////////
// export function resetCharacters() {
//   return {
//     type: RESET_CHARACTER,
//   };
// }
