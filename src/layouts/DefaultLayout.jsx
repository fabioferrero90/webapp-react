import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav.jsx";

const headerMenu = [
   { route: "/", name: "Home", key: "home" },
   { route: "/create", name: "Crea Nuovo Film", key: "create" }
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