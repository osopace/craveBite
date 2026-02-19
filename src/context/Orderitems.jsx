import { createContext, useContext } from "react";
import { useState } from "react";

const OrderContext = createContext();

export const OrderItems = ({ children }) => {
  const [cartItems, setcartItemz] = useState([]);
  const[orderId, setOrderId] = useState("");
  return (
    <OrderContext.Provider value={{ cartItems, setcartItemz, orderId, setOrderId }}>
      {" "}
      {children}
    </OrderContext.Provider>
  );
};

export function useCartItems() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("CartItems must be used inside cartItemContainer");
  } else {
    return context;
  }
}
