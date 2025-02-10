import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav.jsx";

const headerMenu = [
   { route: "/", name: "Home", key: "home" },
 ];

function DefaultLayout() {
   return (
      <>
         <header>
            <MainNav headerMenu={headerMenu}/>
         </header>
         <main>
            <Outlet />
         </main>
      </>
   )
};

export default DefaultLayout;