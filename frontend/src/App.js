import {Routes,Route} from "react-router-dom"
import Home from "./pages/home/Index"
import Login from "./pages/login"
import Profile from "./pages/profile"
import Register from "./pages/register/Register"

function App() {
  return <div>
    <Routes>
      <Route path="/login" element={<Login/>} exact/>
      <Route  path="/register" element={<Register/>} exact/>
      <Route path="/profile" element={<Profile/>} exact/>
      <Route path="/" element={<Home/>} exact/>
    </Routes>
  </div>

}

export default App