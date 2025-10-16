import { BrowserRouter } from "react-router"
import Auth from "../Pages/Auth/register/Auth"

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

