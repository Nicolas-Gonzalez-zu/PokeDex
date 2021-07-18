import React, { useContext, useEffect, useState } from "react";

//import context
import Context from "../../context/context";

//Import styles
import style from "./style";

export default function SearchBar() {
  const [name, setName] = useState("");
  const context = useContext(Context);

  function handleChange(e) {
    setName(e.target.value);
  }

  function onClick() {
    context.getPokemons(name);
  }

  function handlePaginationPrev(){
    context.getPokemonsPagination(context?.pokemons[0]?.id - 21)
  }

  function handlePaginationNext(){
    context.getPokemonsPagination(context?.pokemons[0]?.id + 19)
  }
  useEffect(()=>{
    onClick()
  },[])

  return (
    <>
      <button className={style.Button} type="button" onClick={handlePaginationPrev}>&#60;</button>
      <div style={{margin:"2em"}}>
        <input
        className={style.Input}
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={name}
        />
        <button className={style.Button} type="button" onClick={onClick}>
          Add
        </button>
      </div>
      <button className={style.Button} type="button" onClick={handlePaginationNext}>&#62;</button>
    </>
  );
}
