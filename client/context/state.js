import React, { useReducer } from "react";
import Context from "./context";
import Reducer from "./reducer";
import axios from "axios";

const StateProvider = (props) => {
  const initialState = {
    pokemons: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);
  const getPokemons = async (name) => {
    const response = await axios.get(
      `http://localhost:3001/pokemons/searchPokemon?name=${name}`
    );
    const data = response.data;

    if (!data.results) {
      const array = [];
      array.push(data);
      dispatch({
        type: "GET_POKEMONS",
        payload: array,
      });
    } else {
      let array2 = [];

      console.log("estoy aca");

      for (const element of data.results) {
        console.log(element);
        await axios
          .get(`http://localhost:3001/pokemons/pokemon?url=${element.url}`)
          .then((r) => {
            array2.push(r.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }

      if (array2.length === data.results.length) {
        dispatch({
          type: "GET_POKEMONS",
          payload: array2,
        });
      }
    }
  };

  return (
    <Context.Provider
      value={{
        pokemons: state.pokemons,
        getPokemons,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
