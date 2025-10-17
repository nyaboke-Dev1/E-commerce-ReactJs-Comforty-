import { BrowserRouter } from "react-router"
import Auth from "../Pages/Auth/register/Auth"
import { Routes, Route } from "react-router"
import Navbar from "../Components/Navbar"
import AuthCheck from "../AuthCheck/AuthCheck"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Auth/login/Login"
import Register from "../Pages/Auth/register/Register"
import Error from "../Pages/Error/Error"

const MainLayout = () => {
  return (
    <BrowserRouter>
      {/* navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={
            <AuthCheck>
                <Home/>
            </AuthCheck>
        } />
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Not found routes */}
            <Route path="*" element={<Error />} />
      </Routes>

    </BrowserRouter>
  )
}

export default MainLayout

