import { Routes, Route } from "react-router-dom";
import UserRouter from "./routes/User";
import AdminRouter from "./routes/Admin";

function App() {
  
  return (
    <div>

      <Routes>
        <Route path="/*" element={<UserRouter/>}/>
        <Route path="/admin/*" element={<AdminRouter/>}/>
      </Routes>
    </div>
  );
}

export default App;
