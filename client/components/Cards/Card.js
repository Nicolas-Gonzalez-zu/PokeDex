import React from "react";

export default function Card({ name, img, id }) {
  return (
    <div className="Layout">
      <div className="ImgCnt">
        <img src={img} alt="PokemonImg" />
      </div>
      <div className="InfoCnt">
        <p className="Name">{name}</p>
        <p className="Id">{id}</p>
      </div>
    </div>
  );
}
