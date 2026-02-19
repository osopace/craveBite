import Navbar from "../components/unsignedNav";
import NoOrderList from "../components/orders/noOrderlist";
import CartItem from "../components/orders/cartItem";
import OrderSummary from "../components/orders/OrderSummary";
import { useCartItems } from "../context/Orderitems";
import toast from "react-hot-toast";
export default function CartPage() {
  const { cartItems, setcartItemz } = useCartItems();

  const updateQty = (id, amount) => {
    setcartItemz((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + amount) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setcartItemz((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  const deliveryFee = 2.99;
  const serviceFee = 1.5;
  const total = subtotal + deliveryFee + serviceFee;

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-4 md:px-6 py-6 md:py-10">
        {cartItems.length > 0 ? (
          <>
            <h1 className="text-3xl font-extrabold mb-10">Your Order</h1>

            <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-12">
              {/* CART ITEMS */}
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={() => updateQty(item.id, 1)}
                    onDecrease={() => updateQty(item.id, -1)}
                    onRemove={() => {

                    removeItem(item.id); toast.success("Item removed from cart!");} }
                  />
                ))}
              </div>

              {/* SUMMARY */}
              <OrderSummary
                subtotal={subtotal}
                deliveryFee={deliveryFee}
                serviceFee={serviceFee}
                total={total}
              />
            </div>
          </>
        ) : (
          <NoOrderList />
        )}
      </div>
    </>
  );
}
