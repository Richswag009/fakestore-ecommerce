import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
function App() {
  return (
    <div className="container ">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
