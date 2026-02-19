import { useNavigate } from "react-router-dom";
import { useCartItems } from "../../context/Orderitems";

export default function Receipt() {
  const navigate = useNavigate();
  // const order = JSON.parse(localStorage.getItem("latestOrder"));
  // const { } = useCartItems()

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">CraveBite</h1>
          <p className="text-gray-500">Order Receipt</p>
        </div>

        {/* ORDER INFO */}
        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
          <div>
            <p>
              <strong>Order ID:</strong> #{order.id}
            </p>
            <p>
              <strong>Date:</strong> {order.date}
            </p>
          </div>
          <div className="text-right">
            <p>
              <strong>Name:</strong> {order.name}
            </p>
            <p>
              <strong>Phone:</strong> {order.phone}
            </p>
          </div>
        </div>

        <div className="mb-6 text-sm">
          <p>
            <strong>Method:</strong> {order.deliveryMethod}
          </p>
          {order.deliveryMethod === "delivery" && (
            <p>
              <strong>Address:</strong> {order.address}, {order.city}
            </p>
          )}
          <p>
            <strong>Payment:</strong> {order.payment}
          </p>
        </div>

        <hr className="my-6" />

        {/* ITEMS */}
        <div className="space-y-3">
          {order.cart.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>
                {item.title} × {item.qty}
              </span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <hr className="my-6" />

        {/* TOTALS */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${order.subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>${order.deliveryFee.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Service Fee</span>
            <span>${order.serviceFee.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-lg font-bold mt-3">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>

        <hr className="my-6" />

        {/* FOOTER */}
        <div className="text-center text-gray-500 text-sm mb-6">
          Thank you for ordering with CraveBite 🍔
          <br />
          We hope to serve you again!
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => window.print()}
            className="bg-black text-white px-6 py-2 rounded-lg"
          >
            Print Receipt
          </button>

          <button
            onClick={() => navigate("/")}
            className="border border-black px-6 py-2 rounded-lg"
          >
            Back Home
          </button>
        </div>
      </div>
    </div>
  );
}
