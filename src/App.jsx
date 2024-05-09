import NavBar from "./components/NavBar/NavBar";
import ProductsList from "./components/Products/ProductsList";
import ProductDetailContainer from "./components/Products/ProductDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";
import {ToastContainer} from "react-toastify";
import Banner from "./components/Banner/Banner";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/category/:idCategory" element={<ProductsList />} />
          <Route
            path="/details/:idProduct"
            element={<ProductDetailContainer />}
          />

          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
