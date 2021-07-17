import { createContext } from "react";

const Context = createContext();

export const TestContext = createContext({
  hello: "Server context initialize",
});

export default Context;