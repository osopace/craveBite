import Navbar from "../components/unsignedNav";

import DeliverySpeed from "../components/checkout/deliverySpeed";
import PaymentMethod from "../components/checkout/paymentmethod";
import OrderSummary from "../components/checkout/orderSummary";
import NoOrderList from "../components/orders/noOrderlist";
import CheckoutAddress from "../components/checkout/location";
import { useCartItems } from "../context/Orderitems";

export default function CheckoutPage() {
  const { cartItems } = useCartItems();
  return (
    <div className="min-h-screen bg-[#fff9f6]">
      <Navbar />
      {cartItems.length > 0 ? (
        <main className="max-w-[1200px] mx-auto px-6 py-10">
          <h1 className="text-3xl font-extrabold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-10">
            <div className="space-y-6">
              <CheckoutAddress />
              <DeliverySpeed />
              <PaymentMethod />
            </div>

            <OrderSummary />
          </div>
        </main>
      ) : (
        <NoOrderList />
      )}
    </div>
  );
}
