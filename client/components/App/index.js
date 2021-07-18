import React, { useContext } from "react";

//Import react-router
import { Route, Switch, NavLink } from 'react-router-dom';

//Import context
import StateProvider from "../../context/state";
import { TestContext } from "../../context/context";

//Import components
import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";
import PokemonInfo from "../PokemonInfo/PokemonInfo"

//Import styles
import style from "./style";


function App() {
  const context = useContext(TestContext);
  console.log("render app");
  console.log(context);
  return (
    <>
      <StateProvider>
        <Route path="/">
          <div className={style.Layout}>
            <div className={style.Navbar}>
              <SearchBar />
            </div>
            <div className={style.Cards}>
              <Cards />
            </div>
            <div className={style.Space}/>
          </div>
        </Route>
        <Route path="/pokemon/:id">
          <PokemonInfo  />
        </Route>

      </StateProvider>
    </>
  );
}

export default App;