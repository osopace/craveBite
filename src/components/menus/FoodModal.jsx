import { useState } from "react";
import { Icon } from "@iconify/react";
import OptionGroup from "./foodModalOption";
import { useRecipes } from "../../context/RecipeList";
import { useCartItems } from "../../context/Orderitems";
import toast from "react-hot-toast";

export default function FoodModal({ onClose, data, setTooltip }) {
  const [qty, setQty] = useState(1);
  const [extras, setExtras] = useState([]);
  const [sideContent, setSideContent] = useState([]);

  const ExtraData = sideContent.map((extra) => extra.label).join(", ");

  const { setcartItemz } = useCartItems();

  function AddTorder() {
    if (sideContent.length > 0) {
      const newItem = {
        title: data.title,
        id: data.id,
        extra: ExtraData,
        qty: qty,
        price: data.pricePerServing,
        image: data.image,
      };

      setcartItemz((prev) => [...prev, newItem]);
      onClose(true);

      toast.success("Item added to cart!");
    } else {
      toast.error("Please select a side option before adding to cart.");
    }
  }

  const chooseSideContent = (side) => {
    setSideContent((prevSide) => {
      const exists = prevSide.find((item) => item.label === side.label);
      if (exists) {
        return prevSide.filter((item) => item.label !== side.label);
      } else {
        return [...prevSide, side];
      }
    });
  };

  const ChooseExtra = (extra) => {
    setExtras((prevExtras) => {
      const exists = prevExtras.find(
        (item) => item.label.toLowerCase() === extra.label.toLowerCase(),
      );

      // If already selected → remove it
      if (exists) {
        return prevExtras.filter(
          (item) => item.label.toLowerCase() !== extra.label.toLowerCase(),
        );
      }

      // If not selected → add it

      return [...prevExtras, extra];
    });
  };

  let shortSummary = data?.summary?.split(".")[0] + ".";
  shortSummary = shortSummary.replace(/<b>|<\/b>/g, "");
  const aisles = [...new Set(data?.extendedIngredients?.map((i) => i.aisle))];
  const options = aisles.slice(0, 3);
  const optionsList = options.map((aisle, index) => ({
    label: aisle,
    price: index === 0 ? "Free" : index === 1 ? "+$2.50" : "+$1.50",
    active: index === 0,
    checkbox: false,
  }));
  const Extras = aisles.slice(3, 5);
  const extraList = Extras.map((extra, index) => ({
    label: extra,
    price: index === 0 ? "Free" : index === 1 ? "+$2.50" : "+$1.50",
    checkbox: false,
  }));

  return (
    /* 🔹 BACKDROP */

    <div className="fixed inset-0 z-50 flex md:items-center items-end justify-center bg-black/60 backdrop-blur-sm">
      {/* 🔹 MODAL CONTAINER */}
      <div className="relative w-full  max-w-[900px] md:max-h-[90vh] max-h-[85vh] bg-[#fff9f6] rounded-b-none rounded-t-3xl   md:rounded-xl shadow-2xl overflow-hidden flex-col md:flex-row flex animate-slideUp">
        {/* IMAGE COLUMN */}
        <div className="md:w-[55%] w-full bg-gray-100">
          <img
            src={data.image}
            alt="Food"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT COLUMN */}
        <div className="md:w-[45%] w-full p-8 flex flex-col overflow-y-auto">
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute md:right-6 top-6 right-4 w-9 h-9 rounded-full border bg-white flex items-center justify-center hover:bg-gray-100"
          >
            <Icon icon="lucide:x" className="text-xl" />
          </button>

          {/* HEADER */}
          <div className="mb-6">
            <h1 className="text-3xl font-extrabold mb-1">{data.title}</h1>
            <p className="text-lg font-semibold text-orange-500">
              ${data.pricePerServing}
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-500 leading-relaxed mb-8  italic">
            {shortSummary}
          </p>

          {/* OPTIONS */}
          <OptionGroup
            title="Choice of Side"
            required
            options={[...optionsList]}
            extras={sideContent} // pass active items
            Onselect={chooseSideContent} // reusable
          />

          <OptionGroup
            title="Add Extras"
            extras={extras}
            options={[...extraList]}
            Onselect={ChooseExtra}
          />

          {/* NOTES */}
          <div className="mb-6">
            <h4 className="font-bold mb-3">Special Instructions</h4>
            <textarea
              placeholder="Add a note for the kitchen..."
              className="w-full min-h-[90px] border rounded-lg p-3 text-sm resize-none focus:outline-none"
            />
          </div>

          {/* FOOTER */}
          <div className="mt-auto flex gap-4 ">
            {/* QTY */}
            <div className="flex items-center md:text-slate-900 text-white border rounded-lg bg-slate-900 md:bg-white  h-12">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-12 h-full flex items-center justify-center"
              >
                <Icon icon="lucide:minus" />
              </button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-12 h-full flex items-center justify-center"
              >
                <Icon icon="lucide:plus" />
              </button>
            </div>

            {/* ADD BUTTON */}
            <button
              onClick={() => AddTorder()}
              className="flex-1 bg-orange-500  text-white rounded-lg h-12 px-6 font-semibold  flex justify-center items-center hover:bg-orange-600"
            >
              <span>Add to Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
