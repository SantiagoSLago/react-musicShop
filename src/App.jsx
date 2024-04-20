import NavBar from "./components/NavBar/NavBar";
import ProductsList from "./components/Products/ProductsList";
import ProductDetailContainer from "./components/Products/ProductDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/category/:idCategory" element={<ProductsList />} />
        <Route
          path="/details/:idProduct"
          element={<ProductDetailContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
