import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer.js";
import Header from "./header/Header.js";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
