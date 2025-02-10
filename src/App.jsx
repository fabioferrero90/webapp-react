import "bootstrap/dist/css/bootstrap.min.css"
import { GlobalProvider } from "./context/GlobalContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"


function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/:id" Component={MovieDetail} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App