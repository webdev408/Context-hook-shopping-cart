import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import Home from "./components/Home";
import List from "./components/List";
import "./index.css";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
