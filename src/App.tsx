import "./App.css";
import { Carousel, Header } from "./components";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import { Home } from "./pages";
import Image1 from "./assets/image-product-1.jpg";
import Image2 from "./assets/image-product-2.jpg";
import Image3 from "./assets/image-product-3.jpg";
import Image4 from "./assets/image-product-4.jpg";
import { useState } from "react";
import { CartItem, useCart } from "./context/CartContext.tsx";

const productObject: CartItem = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  images: [Image1, Image2, Image3, Image4],
  price: 125.0,
  quantity: 0,
  imageSelected: "",
};

function App() {
  const [product, setProduct] = useState<CartItem>(productObject);
  const { cart } = useCart();
  console.log(cart);
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Home product={product} setProduct={setProduct}>
          <Carousel product={product} setProduct={setProduct} />
        </Home>
      </ErrorBoundary>
    </>
  );
}

export default App;
