import Nav from "./Nav";
import SearchBar from "../SearchBar.js";
import { useContext } from "react";
import LiveHamburgerIcon from "./LiveHamburgerIcon";
import { Link } from "react-router-dom";
import { MobileMenuContext } from "./Header";
function MainHeader() {
  const { isMobileMenuActive, setIsMobileMenuActive } =
    useContext(MobileMenuContext);
  return (
    <>
      <div
        className={isMobileMenuActive ? "active nav__overlay" : "nav__overlay"}
        onClick={(ev) => setIsMobileMenuActive(() => false)}
      ></div>
      <div className="main-header">
        <Link to="/">
          <Logo />
        </Link>
        <Nav isMobileMenuActive={isMobileMenuActive} />
        <SearchBar />
        <LiveHamburgerIcon
          dependency={isMobileMenuActive}
          className={`live-hamburger-icon  ${
            isMobileMenuActive ? "active" : ""
          }`}
        />
      </div>
    </>
  );
}

function Logo() {
  return (
    <span className="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.299 14.296">
        <path
          id="Path_9975"
          data-name="Path 9975"
          d="M9.138,0H6.364V-1.364H6.327A3.1,3.1,0,0,1,3.5.232,2.96,2.96,0,0,1,1.322-.552,2.809,2.809,0,0,1,.529-2.644q0-2.765,3.275-3.191l2.579-.343q0-1.559-1.688-1.559A5.763,5.763,0,0,0,1.466-6.726V-8.934A7.263,7.263,0,0,1,3.14-9.491a8.8,8.8,0,0,1,1.934-.241q4.063,0,4.063,4.054ZM6.383-3.859V-4.5l-1.726.223q-1.429.186-1.429,1.29a1.066,1.066,0,0,0,.348.821,1.337,1.337,0,0,0,.942.32,1.736,1.736,0,0,0,1.345-.571A2.061,2.061,0,0,0,6.383-3.859ZM14.389,0H11.458V-14.064h2.932Zm5.4,0H16.857V-14.064h2.932Zm5.752-4.583V0h-3V-13.3h4.694q5.028,0,5.028,4.24a4.068,4.068,0,0,1-1.443,3.242,5.715,5.715,0,0,1-3.855,1.239Zm0-6.42v4.147h1.178q2.394,0,2.394-2.1,0-2.05-2.394-2.05ZM37.889.232A5.107,5.107,0,0,1,34.155-1.1,4.827,4.827,0,0,1,32.8-4.713,4.827,4.827,0,0,1,34.206-8.4a5.328,5.328,0,0,1,3.813-1.331A5.045,5.045,0,0,1,41.729-8.4,4.732,4.732,0,0,1,43.075-4.88a5.023,5.023,0,0,1-1.387,3.739A5.163,5.163,0,0,1,37.889.232Zm.074-7.719a1.955,1.955,0,0,0-1.614.714,3.15,3.15,0,0,0-.575,2.022q0,2.737,2.208,2.737,2.106,0,2.106-2.811Q40.087-7.487,37.963-7.487Zm13.211.631a2.543,2.543,0,0,0-1.234-.288,1.778,1.778,0,0,0-1.494.7,3.056,3.056,0,0,0-.538,1.906V0H44.977V-9.5h2.932v1.763h.037a2.536,2.536,0,0,1,2.5-1.93,1.888,1.888,0,0,1,.724.111ZM58.828-.111A4.333,4.333,0,0,1,56.87.232q-3.1,0-3.1-3.219V-7.338h-1.54V-9.5h1.54v-2.05l2.922-.835V-9.5h2.134v2.162H56.694V-3.5q0,1.484,1.178,1.484a1.986,1.986,0,0,0,.956-.269Z"
          transform="translate(-0.529 14.064)"
          fill="#758bfd"
        />
      </svg>
    </span>
  );
}
export default MainHeader;
