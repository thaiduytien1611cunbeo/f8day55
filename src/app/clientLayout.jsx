"use client";

import React, { createContext, useState } from "react";
import { Providers } from "./providers";

export const Context = createContext();

const ClientLayout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleSetTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Context.Provider value={{ theme, handleSetTheme }}>
      <html lang="en" className={theme}>
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </Context.Provider>
  );
};

export default ClientLayout;
