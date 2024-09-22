/* eslint-disable react/prop-types */
import { useState } from "react";
import context from "./context";

export default function ContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <context.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </context.Provider>
  );
}
