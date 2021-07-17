import React, { useContext } from "react";

//Import component
import Card from "./Card";

//import context
import Context from "../../context/context";

export default function Cards() {
  const context = useContext(Context);
  let pokemons = context.pokemons;
  console.log(pokemons);
  return (
    <div>
      {pokemons?.map((c, index) => (
        <Card
          id={c.id}
          key={index}
          name={c.name}
          img={c.sprites.other["official-artwork"].front_default}
        />
      ))}
    </div>
  );
}