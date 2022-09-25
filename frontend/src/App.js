import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Index";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register/Register";
import LoggedInRouter from "./routes/LoggedInRouter";
import NotLoggedInRoute from "./routes/NotLoggedInRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<NotLoggedInRoute/>}>
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        </Route>
        <Route element={<LoggedInRouter/>}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home />} exact />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
