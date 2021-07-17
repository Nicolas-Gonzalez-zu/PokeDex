import React, { useContext } from "react";

//Import context
import StateProvider from "../../context/state";
import { TestContext } from "../../context/context";

//Import components
import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";

//Import styles
import style from "./style";

function App() {
  const context = useContext(TestContext);
  console.log("render app");
  console.log(context);
  return (
    <>
      <StateProvider>
        <div className={style.Layout}>
          <div className={style.Navbar}>
            <SearchBar />
          </div>
          <div className={style.Cards}>
            <Cards />
          </div>
        </div>
      </StateProvider>
    </>
  );
}

export default App;