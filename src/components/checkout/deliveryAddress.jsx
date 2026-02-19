export default function DeliveryAddress() {
  return (
    <div className="bg-white border border-black/10 rounded-lg p-6">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-lg flex items-center gap-2">
          📍 Delivery Address
        </h3>
        <button className="text-[#ff6a3d] text-sm font-semibold">Change</button>
      </div>

      <img
        className="w-full h-40 rounded-md object-cover mb-4 opacity-80"
        src="https://storage.googleapis.com/banani-generated-images/generated-images/71a78d5a-6561-4180-8933-78c2c6851b76.jpg"
        alt="map"
      />

      <div className="mb-4">
        <p className="font-semibold">Home</p>
        <p className="text-sm text-gray-500">
          123 Culinary Avenue, Apt 4B, Foodie City
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500 border rounded-md p-3">
        💬 Note to driver: Please leave at the front desk.
      </div>
    </div>
  );
}
