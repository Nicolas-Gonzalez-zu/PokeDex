import React, { useReducer, useState } from "react";
import Context from "./context";
import Reducer from "./reducer";
import axios from "axios";

const StateProvider = (props) => {
  const initialState = {
    pokemons: [],
  };
  const [loading, setLoading] = useState(false)
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getPokemonsPagination = async (offset) => {
    setLoading(true)
    await axios.get(
      `http://localhost:3001/pokemons/pagination?offset=${offset}`
    ).then(async (r)=>{  
        let array2 = [];
        for (const element of r.data) {
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
        if (array2.length === r.data.length) {
          setLoading(false)
          localStorage.setItem('pokemons', JSON.stringify(array2))
          dispatch({
            type: "GET_POKEMONS",
            payload: array2,
          });
        }
      
    }).catch((e)=>{
      setLoading(false)
      console.log(e);
    })

  }

  const loadPokemons = async (pokemons) => {
    dispatch({
      type: "GET_POKEMONS",
      payload: pokemons,
    });
  }


  const getPokemons = async (name) => {
    setLoading(true)
    const response = await axios.get(
      `http://localhost:3001/pokemons/searchPokemon?name=${name}`
    ).then(async (r)=>{
      if (!r.data.results) {
        const array = [];
        console.log(r.data);
        array.push(r.data);
        setLoading(false)
        dispatch({
          type: "GET_POKEMONS",
          payload: array,
        });
      } else {
        let array2 = [];
        for (const element of r.data.results) {
          await axios
            .get(`http://localhost:3001/pokemons/pokemon?url=${element.url}`)
            .then((r) => {
              array2.push(r.data);
            })
            .catch((e) => {
              console.log(e);
            });
        }
  
        if (array2.length === r.data.results.length) {
          setLoading(false)
          localStorage.setItem('pokemons', JSON.stringify(array2))
          dispatch({
            type: "GET_POKEMONS",
            payload: array2,
          });
        }
      }
    }).catch((e)=>{
      setLoading(false)
      console.log(e);
    });     
  };

  return (
    <Context.Provider
      value={{
        pokemons: state.pokemons,
        loading,
        getPokemons,
        getPokemonsPagination,
        loadPokemons,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
