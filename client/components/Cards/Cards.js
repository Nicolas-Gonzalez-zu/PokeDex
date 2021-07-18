import React, { useContext } from "react";

//Import styles
import style from "./style"; 

//Import component
import Card from "./Card";

//import context
import Context from "../../context/context";

//Import function
import {capitalizeFirstLetter, changeId} from '../../helpers/functions'

export default function Cards() {
  const context = useContext(Context);
  let pokemons = context.pokemons;
  console.log(context);

  return (
    <div className={style.Layout}>
      
      {context.loading && <div className={style.Loading}> </div>}
      {pokemons?.map((c, index) => {
        let name = capitalizeFirstLetter(c.name)
        let id = changeId(c.id)
        return(
          <Card
            click={c.id}
            id={id}
            key={index}
            name={name}
            img={c.sprites.other["official-artwork"].front_default}
          />
        )
      })}
      
      <div style={{width:"100em", height:"1em"}}> </div>
    </div>
  );
}