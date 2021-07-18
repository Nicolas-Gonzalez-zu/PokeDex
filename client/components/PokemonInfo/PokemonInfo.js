import React, { useContext } from "react";

//Import function
import {capitalizeFirstLetter, changeId, changeHeight, changeWeight} from '../../helpers/functions'

//Import react router
import { Link, useHistory, useParams } from "react-router-dom";

//import context
import Context from "../../context/context";

//Import styles
import style from "./style"; 

export default function PokemonInfo(){
    let { id } = useParams();
    const context = useContext(Context);
    const history = useHistory();
    let pokemons = context.pokemons;
    let pokemon = pokemons.find((p) => p.id == id)
    function handleClick(e) {
        e.preventDefault();
        history.push(`/`);
    }

    if(pokemons.find((p) => p.id == id)){
        let name = capitalizeFirstLetter(pokemon.name)
        let id = changeId(pokemon.id)
        return(
            <div className={style.Layout}  >
                <div className={style.Card}>
                    <div className={style.ImgCnt}>
                        <img alt="PokemonImg" src={pokemon.sprites.other["official-artwork"].front_default}/>
                    </div>
                    <div className={style.InfoCnt}>
                        <div className={style.NameCnt}>
                            <p className={style.Name}><b>{name}</b><span>{id}</span></p>
                            <div>
                                {pokemon.id > 1 && <Link className={style.Link} to={`/pokemon/${pokemon.id - 1}`}>{changeId(pokemon.id - 1)}</Link>}
                                <button type="button" onClick={handleClick} className={style.Link}>Close</button>
                                {pokemons[pokemons.length-1].id >= (pokemon.id + 1) && <Link className={style.Link} to={`/pokemon/${pokemon.id + 1}`}>{changeId(pokemon.id + 1)}</Link>}
                            </div>
                        </div>
                        <div className={style.InfoInnerCnt}>
                            <div>
                                <b>Height</b>
                                <p>{changeHeight(pokemon.height)}</p>
                            </div>
                            <div>
                                <b>Type</b>
                                {pokemon.types.map((e, index)=>{
                                    return(
                                        <p className={style.Type} target={`${capitalizeFirstLetter(e.type.name)}`} key={index + 'Ability'}>{capitalizeFirstLetter(e.type.name)}</p>
                                    )
                                })}
                            </div>
                            <div>
                                <b>Weight</b>
                                <p>{changeWeight(pokemon.weight)}</p>
                            </div>
                            <div>
                                <b>Abilities</b>
                                <p>{capitalizeFirstLetter(pokemon.abilities[0].ability.name)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}