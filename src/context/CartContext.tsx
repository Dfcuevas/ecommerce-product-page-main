import React, { createContext, ReactNode, useContext, useState } from "react";

//Creo la interface de tipos del carrito y del contexto que va a almacenar el estado del carrito de compras.
export interface CartItem {
  id: number;
  quantity: number;
  price: number;
  imageSelected: string;
  name: string;
  images?: string[];
}

interface CartContextType {
  openCart: boolean;
  cart: CartItem[];
  addTocart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  setOpenCloseCart: () => void;
}
//Creo el contexto para el carrito, esto permitirá que cualquier componente en la aplicacion acceda al estado del carrito.
const CartContext = createContext<CartContextType | undefined>(undefined);

//Creo el proveedor del contexto que va a envolver la aplicacion y proporcionará el estado y las funciones para modificarlo.
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [openCart, setOpenCart] = useState<boolean>(false);

  const addTocart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }

      return [...prevCart, item];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const setOpenCloseCart = () => {
    setOpenCart((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{ cart, addTocart, removeFromCart, openCart, setOpenCloseCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

//Creo un hook personalizado para facilitar el acceso al contexto del carrito.
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
