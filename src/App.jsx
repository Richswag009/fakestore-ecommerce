import Home from "./Components/Home";
// import Navbar from "./Components/Layouts/Navbar";
import Products from "./Components/Products/ProductItem";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/Products/ProductDetail";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
