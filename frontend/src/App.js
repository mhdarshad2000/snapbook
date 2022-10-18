import { Routes, Route } from "react-router-dom";
import UserRouter from "./routes/User";
import AdminRouter from "./routes/Admin";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </Fragment>
  );
}

export default App;
