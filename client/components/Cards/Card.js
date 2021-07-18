import React from "react";

//Import react router
import { useHistory } from "react-router-dom";

//Import styles
import style from "./style"; 

export default function Card({ name, img, id, click }) {
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    history.push(`/pokemon/${click}`);
  }

  return (
    <div onClick={handleClick} className={style.LayoutCard} >
      <div className={style.ImgCnt} >
        <img className={style.PokemonImg} src={img} alt="PokemonImg"  />
      </div>
      <div className={style.InfoCnt} >
        <p className={style.Name} >{name}</p>
        <p className={style.Id} >{id}</p>
      </div>
    </div>
  );
}
