import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import NavBar from "./NavBar";
import FavoritesContextProvider from "../contexts/FavoritesContext";

function Layout() {
  return (
    <div>
      <NavBar />
      <FavoritesContextProvider>
        <Outlet />
      </FavoritesContextProvider>
      <Footer />
    </div>
  );
}

export default Layout;
