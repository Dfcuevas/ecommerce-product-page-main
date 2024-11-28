import { Button } from "../button/Button.tsx";
import TrashIcon from "../../assets/icon-delete.svg";
import { CartItem, useCart } from "../../context/CartContext.tsx";

export const ShopingCart = ({ cart }: { cart: CartItem[] }) => {
  const { removeFromCart } = useCart();
  return (
    <div className="absolute z-20 max-w-[340px] w-full bg-white top-2 left-1/2 transform -translate-x-1/2 sm:right-4 sm:translate-x-0 sm:left-auto rounded-lg shadow-xl">
      <h1 className={"font-bold border-b border-b-grayishBlue p-4"}>Cart</h1>
      {cart.length === 0 ? (
        <p className="flex justify-center items-center p-16 text-darkGrayishBlue font-bold">
          Your cart is empty.
        </p>
      ) : (
        cart.map((item) => (
          <div className={"p-4"} key={item.id}>
            <div className={"flex justify-between mb-6 items-center"}>
              <div className={"w-12 h-12 rounded-lg overflow-hidden"}>
                <img src={item.imageSelected} alt={`${item.name} image`} />
              </div>
              <div>
                <p className={"text-darkGrayishBlue"}>{item.name}</p>
                <p className={"text-darkGrayishBlue"}>
                  ${item.price ? item.price.toFixed(2) : "0.00"} x{" "}
                  {item.quantity}{" "}
                  <span className={"font-bold text-blackLightboxBg"}>
                    $
                    {item.price
                      ? (item.price * item.quantity).toFixed(2)
                      : "0.00"}
                  </span>
                </p>
              </div>
              <div onClick={() => removeFromCart(item.id)}>
                <img
                  className={"cursor-pointer"}
                  src={TrashIcon}
                  alt={"Trash"}
                />
              </div>
            </div>
            <Button>
              <span>Checkout</span>
            </Button>
          </div>
        ))
      )}
    </div>
  );
};
