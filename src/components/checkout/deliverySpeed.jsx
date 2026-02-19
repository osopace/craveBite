import { useState } from "react";

export default function DeliverySpeed() {
  const [speed, setSpeed] = useState("Standard");
  const handleClick = () => {};

  return (
    <div className="bg-white border border-black/10 rounded-lg p-6">
      <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
        ⏱️ Delivery Speed
      </h3>

      <div className="flex gap-3">
        <div
          className={`flex-1 border rounded-md p-4 ${speed === "Priority" ? "border-[#ff6a3d]" : ""} bg-gray-50`}
          onClick={() => setSpeed("Priority")}
        >
          <div className="flex justify-between font-semibold text-sm">
            <span>Priority</span>
            <span>+$1.99</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">15–20 min</p>
        </div>

        <div
          className={`flex-1 border rounded-md p-4 ${speed === "Standard" ? "border-[#ff6a3d]" : ""} bg-gray-50`}
          onClick={() => setSpeed("Standard")}
        >
          <div className="flex justify-between font-semibold text-sm">
            <span>Standard</span>
            <span>Free</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">30–45 min</p>
        </div>
      </div>
    </div>
  );
}
