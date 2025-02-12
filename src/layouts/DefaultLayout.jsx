import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav.jsx";
import Loader from "../components/partials/Loader.jsx";
import { useGlobalContext } from "../context/GlobalContext.jsx";

const headerMenu = [
   { route: "/", name: "Home", key: "home" },
   { route: "/create", name: "Crea Nuovo Film", key: "create" }
 ];


function DefaultLayout() {

   const { isLoading } = useGlobalContext();
   
   return (
      <>
         <header>
            <MainNav headerMenu={headerMenu}/>
         </header>
         <main>
            <Outlet />
         </main>
         {isLoading && <Loader />}
      </>
   )
};

export default DefaultLayout;