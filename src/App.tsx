import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToSection from "./components/ScrollToSection";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToSection />

      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
