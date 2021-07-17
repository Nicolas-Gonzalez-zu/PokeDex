const Reducer = (state, action) => {
    switch (action.type) {
      case "GET_POKEMONS":
        return {
          ...state,
          pokemons: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;