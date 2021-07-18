import { createContext } from "react";

const Context = createContext({hello:"hello"});

export const TestContext = createContext({
  hello: "Server context initialize",
});

export default Context;