import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useCartItems } from "../context/Orderitems";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const { orderId } = useCartItems();
  return (
    <div className="min-h-screen bg-[#fff9f6] flex flex-col">
      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-4 py-6   md:px-4 md:py-6">
        <div className="bg-white border border-black/10 rounded-xl p-6 max-w-lg w-full text-center shadow-lg">
          <div className=" md:w-16 md:h-16 w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-8">
            {" "}
            <Icon icon="lucide:check" className="text-2xl font-bold " />
          </div>

          <h1 className="md:text-3xl text-3xl font-extrabold mb-3 text-[#1b1b1b]">
            Order Confirmed!
          </h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Thank you for your order. We've received your payment and the
            restaurant has started preparing your food.
          </p>

          <div className="bg-gray-100 rounded-lg p-6 mb-8 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase text-gray-500 tracking-wide">
              Order Reference
            </span>
            <span className="text-2xl font-bold font-mono text-[#1b1b1b]">
              {`CB${orderId}`}
            </span>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-700 font-medium">
              ⏱️ <span>Estimated Delivery: 35-45 mins</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button className="h-14 w-full bg-[#ff6a3d] text-white font-semibold rounded-lg hover:opacity-90 transition">
              Order ID
            </button>
            <button
              onClick={() => navigate("/")}
              className="h-14 w-full border border-black/10 text-[#1b1b1b] rounded-lg hover:bg-gray-100 transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
