import React, { children, createContext, useState } from "react";

const NavContext = createContext();
export const NavProvider = ({ children }) => {
  const [navopen, setnavopen] = useState(false);
  return (
    <div>
      <NavContext.Provider value={[navopen, setnavopen]}>
        {children}
      </NavContext.Provider>
    </div>
  );
};
export default NavContext;
