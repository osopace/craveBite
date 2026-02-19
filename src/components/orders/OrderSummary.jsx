import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function OrderSummary({
  subtotal,
  deliveryFee,
  serviceFee,
  total,
}) {
  const navigate = useNavigate();
  return (
    <div className="bg-white border rounded-xl p-8 sticky top-24 h-fit">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>

      <SummaryRow label="Subtotal" value={subtotal} />
      <SummaryRow label="Delivery Fee" value={deliveryFee} />
      <SummaryRow label="Service Fee" value={serviceFee} />

      <div className="flex justify-between mt-6 pt-6 border-t text-xl font-extrabold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button
        className="w-full h-14 mt-8 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600"
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>

      <div className="mt-4 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
        <Icon icon="lucide:shield-check" />
        Secure Checkout
      </div>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between mb-4 text-sm text-gray-500">
      <span>{label}</span>
      <span>${value.toFixed(2)}</span>
    </div>
  );
}
