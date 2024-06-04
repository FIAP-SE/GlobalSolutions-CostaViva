import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/AboutProject/Home";
import Problem from "./routes/AboutProject/Problem";
import Study from "./routes/AboutProject/Study";
import Proposal from "./routes/AboutProject/Proposal";
import HomeProject from "./routes/Project/HomeProject";
import Cart from "./routes/Project/Cart";
import Store from "./routes/Project/Store";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/problemas" element={<Problem />} />
        <Route path="/estudos" element={<Study />} />
        <Route path="/propostas" element={<Proposal />} />
        <Route path="/projeto" element={<HomeProject />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/loja" element={<Store/>} />
      </Routes>
    </Router>
  );
}
