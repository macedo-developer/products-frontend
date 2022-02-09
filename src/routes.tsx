import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/products" element={<NewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
