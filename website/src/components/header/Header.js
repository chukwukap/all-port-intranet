import MainHeader from "./MainHeader";
import UpperBar from "./UpperBar";
import "../index.css";
import "./header.css";
import { useState } from "react";
import { createContext } from "react";

export const MobileMenuContext = createContext();
function Header() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  return (
    <header className={isMobileMenuActive ? "header active" : "header"}>
      <MobileMenuContext.Provider
        value={{ setIsMobileMenuActive, isMobileMenuActive }}
      >
        <UpperBar />
        <MainHeader />
      </MobileMenuContext.Provider>
    </header>
  );
}

export default Header;
