import { useCartItems } from "../../context/Orderitems";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpandableText from "../textFormat";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

export default function OrderSummary() {
  const { cartItems, setOrderId } = useCartItems();
  const [subprice, setsubPrices] = useState([]);
  const Navigate = useNavigate();

  // const addItems = ({label, qty}) => {
  //   const newItem = {
  //     label,
  //     qty,
  //   };

  // };
  const subPricez = cartItems.map((item) => item.qty * item.price);
  const subtotal = subPricez.reduce((sum, items) => sum + items, 0);
  const total = subtotal + 4.98 + 1.5;

  const handlepayment = (total) => {
    if (total === "0.00") {
      alert("Your cart is empty!");
      return;
    } else {
      const orderId = uuidv4();

      setOrderId(orderId.slice(0, 8).toUpperCase());

      toast.success("Payment successful!");

      Navigate("/PaymentSuccess");
    }
  };

  return (
    <aside className="sticky top-24 bg-white border border-black/10 rounded-xl p-8">
      <h3 className="font-bold text-xl mb-6">Order Summary</h3>

      <div className="space-y-3 text-sm border-b pb-4 mb-4">
        {cartItems.map((itemz) => {
          const itemTotal = itemz.qty * itemz.price;
          return (
            <div className="flex justify-between" key={itemz.id}>
              <span>
                {" "}
                {itemz.qty} ×{" "}
                <ExpandableText text={itemz.title} maxChars={19} />
              </span>

              <span>${itemTotal.toFixed(2)} </span>
            </div>
          );
        })}
      </div>

      <div className="space-y-3 text-sm text-gray-500">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)} </span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>$4.98</span>
        </div>
        <div className="flex justify-between">
          <span>Service</span>
          <span>$1.50</span>
        </div>
      </div>

      <div className="flex justify-between font-extrabold text-lg border-t mt-4 pt-4">
        <span>Total</span>
        <span> {total.toFixed(2)} </span>
      </div>

      <button
        className="mt-6 w-full h-14 rounded-lg bg-[#ff6a3d] text-white font-semibold"
        onClick={() => handlepayment(total)}
      >
        Pay ${total.toFixed(2)}
      </button>

      <p className="text-xs text-gray-500 mt-4 text-center">
        🔒 Payments are secure and encrypted
      </p>
    </aside>
  );
}
