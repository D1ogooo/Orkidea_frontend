import { createBrowserRouter } from "react-router-dom";
import Produtos from './pages/Produtos/Produtos'
import Login from './pages/Minhaconta/Login/login'

const router = createBrowserRouter([
  {
    path: "/produtos",
    element: <Produtos/>
  },
  {
    path: "/",
    element: <Login/>
  }
])

export default router