// Returns open or close hamburger icon depending on the truthiness of the dependency prop

import { useContext } from "react";
import { MobileMenuContext } from "./Header";

function LiveHamburgerIcon({ className }) {
  const { isMobileMenuActive, setIsMobileMenuActive } =
    useContext(MobileMenuContext);
  const currentIcon = isMobileMenuActive ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
      <path
        data-name="Icon material-close"
        d="M28.5,9.615,26.385,7.5,18,15.885,9.615,7.5,7.5,9.615,15.885,18,7.5,26.385,9.615,28.5,18,20.115,26.385,28.5,28.5,26.385,20.115,18Z"
        transform="translate(-7.5 -7.5)"
      />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16">
      <path d="M21,16H12V13.419h9V16Zm0-6.71H6V6.709H21V9.29Zm0-6.71H0V0H21V2.579Z" />
    </svg>
  );
  return (
    <div
      onClick={(ev) => setIsMobileMenuActive((prev) => !prev)}
      className={className + " hamburger-wrapper"}
    >
      {currentIcon}
    </div>
  );
}

export default LiveHamburgerIcon;
