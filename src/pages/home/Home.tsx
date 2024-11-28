import React, { ReactNode } from "react";
import { Button } from "../../components";

import IconCart from "../../assets/icon-cart.svg";
import { ShopingCart } from "../../components/shopingCart/ShopingCart.tsx";
import { CartItem, useCart } from "../../context/CartContext.tsx";

interface Props {
  children: ReactNode;
  product: CartItem;
  setProduct: React.Dispatch<React.SetStateAction<CartItem>>;
}

export const Home = ({ children, product, setProduct }: Props) => {
  const { cart, addTocart, openCart } = useCart();

  const incrementCountItemsCart = () => {
    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        quantity: prevProduct.quantity + 1,
      };
    });
  };
  const decrementCountItemsCart = () => {
    setProduct((prevProduct) => {
      if (prevProduct.quantity > 0) {
        return {
          ...prevProduct,
          quantity: prevProduct.quantity - 1,
        };
      }
      return prevProduct;
    });
  };
  const handleSubmit = () => {
    const itemToCart = {
      id: product?.id,
      name: product?.name,
      price: product?.price,
      imageSelected: product?.imageSelected,
      quantity: product?.quantity,
    };
    addTocart(itemToCart);
    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        quantity: 0,
        imageSelected: "",
      };
    });
  };

  return (
    <main className="relative lg:flex lg:gap-8 lg:items-center lg:p-16 lg:max-w-screen-xl lg:mx-auto">
      {openCart && <ShopingCart cart={cart} />}
      <div className="max-w-xl mx-auto lg:flex-none lg:w-2/4 mb-12">
        {children}
      </div>
      <div className="p-4 lg:flex-none lg:w-2/4">
        <div className="mb-6">
          <p className="text-darkGrayishBlue font-bold tracking-wider mb-4">
            SNEAKER COMPANY
          </p>
          <h1 className="text-3xl font-bold text-veriDarkBlue mb-6 lg:text-4xl lg:font-extrabold">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-darkGrayishBlue">
            These low-profile sneakers are your perfecto casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer
          </p>
        </div>
        <div className="flex justify-between mb-6">
          <div>
            <span className="font-extrabold text-2xl mr-4">$125.00</span>
            <span className="bg-veriDarkBlue text-white py-1 px-2 rounded-md">
              50%
            </span>
          </div>
          <div>
            <span className="text-darkGrayishBlue font-bold line-through ">
              $250.00
            </span>
          </div>
        </div>
        <div className="sm:flex sm:justify-between gap-4">
          <div className="flex sm:flex-0 sm:w-1/3 justify-between items-center  bg-lightGrayishBlue py-4 sm:py-2 px-5 sm:px-3 gap-2 rounded-lg mb-4 sm:mb-0">
            <span
              onClick={decrementCountItemsCart}
              className="cursor-pointer text-orange font-bold text-3xl hover:text-orange/60"
            >
              -
            </span>
            <span className="font-bold">{product.quantity}</span>
            <span
              onClick={incrementCountItemsCart}
              className="cursor-pointer text-orange font-bold text-3xl hover:text-orange/60"
            >
              +
            </span>
          </div>
          <Button handleSubmit={handleSubmit}>
            <img
              className="w-4 h-4 mr-2 font-extrabold text-veriDarkBlue"
              src={IconCart}
              alt="Icon cart"
            />
            <span>Add to cart</span>
          </Button>
        </div>
      </div>
    </main>
  );
};
