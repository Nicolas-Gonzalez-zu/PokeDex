import React, { useContext, useEffect, useState } from "react";

//import context
import Context from "../../context/context";

//Import styles
import "./searchbar.less";

export default function SearchBar() {
  const [name, setName] = useState("");
  const context = useContext(Context);

  function handleChange(e) {
    setName(e.target.value);
  }

  function onClick() {
    context.getPokemons(name);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={name}
      />
      <button type="button" onClick={onClick}>
        Add
      </button>
    </div>
  );
}
