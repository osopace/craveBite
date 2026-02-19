import { useState } from "react";

export default function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  return (
    <div className="bg-white border border-black/10 rounded-lg p-6">
      <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
        💳 Payment Method
      </h3>

      <div className="space-y-3">
        {[
          { label: "Visa ending in 4242", badge: "VISA" },
          { label: "PayPal", badge: "PAY" },
          { label: "Cash on Delivery", badge: "💵" },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 p-4 border rounded-md cursor-pointer ${
              item.label === paymentMethod ? "border-[#ff6a3d] bg-gray-50" : ""
            }`}
          >
            <input
              type="radio"
              className="cursor-pointer"
              name="payment"
              value={item.label}
              checked={paymentMethod === item.label}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <div className="w-10 h-6 bg-gray-200 rounded text-xs font-bold flex items-center justify-center">
              {item.badge}
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* <button className="mt-4 text-sm text-[#ff6a3d] font-medium">
        ➕ Add new card
      </button> */}
    </div>
  );
}
