import { Icon } from "@iconify/react";
import FoodModal from "../menus/FoodModal";
import { useState } from "react";

export default function RestaurantHeader({ menu }) {
  if (!menu) return null;
  const [isOpen, setHisOpen] = useState(false);
  return (
    <>
      {isOpen && <FoodModal onClose={() => setHisOpen(false)} data={menu} />}
      <div key={menu.id}>
        <div className="h-[300px] w-full relative">
          <img
            className="h-full w-full object-cover contrast-110 brightness-110"
            src="https://storage.googleapis.com/banani-generated-images/generated-images/f870ae0f-f7a6-43e6-bf57-01604e5cf83b.jpg"
            // src={menu.image}
            alt=""
          />
        </div>

        <div className="max-w-[1440px] md:block hidden  w-full absolute md:bottom-[15%]  mx-auto px-10 mt-20 mb-10  ">
          <div className="bg-white   border border-black/10 rounded-lg p-8 md:items-center shadow-lg flex flex-col md:flex-row md:justify-between">
            <div>
              <h1 className="md:text-3xl text-lg font-extrabold mb-3">
                {menu.title}
              </h1>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="font-semibold text-black">
                  ⭐{menu.healthScore}{" "}
                </span>{" "}
                <div className="flex items-center font-semibold gap-1 bg-[var(--logoColor)] border rounded-md px-2 py-1 text-white">
                  <span>
                    {" "}
                    <Icon icon="mdi:bike" className="text-lg" />
                  </span>{" "}
                  1.2 miles
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    <Icon icon="mdi:clock-outline" className="text-lg" />
                  </span>{" "}
                  {menu.readyInMinutes} min
                </div>
                <span className="text-green-600 font-medium">
                  <span>$</span> Free delivery
                </span>
              </div>
            </div>

            <button
              onClick={() => setHisOpen(true)}
              className="bg-[var(--logoColor)] hover:bg-[#c46635] h-12 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-md active:scale-95"
            >
              + Add to Order
            </button>
          </div>
        </div>
        <div className="relative w-full px-4 -mt-[25%] mb-6 z-10 md:hidden block">
          <div className="bg-white rounded-[24px] p-6 shadow-xl border border-gray-100 max-w-md mx-auto">
            {/* Title Section */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-2">
              {menu.title}
            </h1>

            {/* Rating Row */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {/* Simple Star Icon */}
                <span className="text-lg">⭐</span>
              </div>
              <span className="text-sm font-bold text-gray-800">
                {menu.healthScore / 20}
              </span>
              <span className="text-sm text-gray-400 font-normal">
                (120+ reviews)
              </span>
            </div>

            {/* Divider */}
            <hr className="border-gray-100 mb-4" />

            {/* Info Icons Row */}
            <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
              <div className="flex items-center font-semibold gap-1 bg-[var(--logoColor)] border rounded-md px-2 py-1 text-white">
                <span>
                  {" "}
                  <Icon icon="mdi:bike" className="text-lg" />
                </span>{" "}
                1.2 miles
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <Icon icon="mdi:clock-outline" className="text-lg" />
                </span>{" "}
                {menu.readyInMinutes} min
              </div>
              <div className="flex items-center gap-1 font-medium text-green-600">
                <span>$</span> Free delivery
              </div>
            </div>

            {/* Price and Action Row */}
            <div className="flex justify-between items-center pt-2">
              <span className="text-xl font-bold text-gray-800">
                ${menu.pricePerServing}
              </span>
              <button
                onClick={() => setHisOpen(true)}
                className="bg-[var(--logoColor)] hover:bg-[#c46635] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md active:scale-95"
              >
                + Add to Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
