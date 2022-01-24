import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

import Login from "./pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
