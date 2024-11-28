import Logo from "../../assets/logo.svg";
import Menu from "../../assets/icon-menu.svg";
import Carrito from "../../assets/icon-cart.svg";
import Avatar from "../../assets/image-avatar.png";
import { Navbar } from "../navbar/Navbar";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { cart, setOpenCloseCart } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex justify-between sm:border-b p-4 sm:border-grayishBlue lg:max-w-screen-xl lg:mx-auto md:pt-8 md:pb-0">
      <div className="flex items-center justify-between">
        <div onClick={toggleMenu} className="cursor-pointer  mr-4 relative">
          <img className="sm:hidden" src={Menu} alt="Menu Hambuerguesa" />
        </div>
        <div className="md:pb-8 border-b-4 border-transparent sm:mr-4 md:mr-12">
          <img src={Logo} alt="Logo Sneakers" />
        </div>
        {isMenuOpen && <Navbar setIsMenuOpen={setIsMenuOpen} />}
      </div>
      <div className="flex gap-4 items-center md:pb-8">
        <div className="cursor-pointer relative" onClick={setOpenCloseCart}>
          <img src={Carrito} alt="carrito de compras" />
          {cart.length > 0 && cart[0].quantity !== undefined && (
            <span className="absolute -top-2 -right-2 rounded-full bg-orange p-0 w-5 h-5 flex items-center justify-center text-[12px]">
              {cart[0].quantity}
            </span>
          )}
        </div>
        <div className="cursor-pointer hover:outline hover:outline-orange hover:rounded-full">
          <img width={32} height={32} src={Avatar} alt="Avatar usuario" />
        </div>
      </div>
    </header>
  );
};
