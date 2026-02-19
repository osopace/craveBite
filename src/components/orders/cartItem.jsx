import { Icon } from "@iconify/react";
import ExpandableText from "../textFormat";
export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="flex md:gap-5 p-2 gap-2 md:p-6 bg-white border rounded-lg items-center">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 rounded-md object-cover"
      />

      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg truncate md:block hidden">
          {" "}
          <ExpandableText text={item.title} maxChars={25} />
        </h3>
        <h3 className="font-bold md:hidden block text-lg truncate">
          {" "}
          <ExpandableText text={item.title} maxChars={11} />
        </h3>
        <p className="text-sm text-gray-500 mb-1">{item.extra}</p>
        <p className="font-semibold">${item.price.toFixed(2)}</p>
      </div>

      <div className="flex flex-col items-end gap-6 md:gap-4 p-2 ">
        {/* QTY */}
        <div className="flex border rounded-md overflow-hidden">
          <button
            onClick={onDecrease}
            className="md:w-8 h-4 w-4 md:h-8 flex items-center justify-center hover:bg-gray-100"
          >
            <Icon icon="lucide:minus" />
          </button>
          <span className="w-8 text-center font-semibold text-sm">
            {item.qty}
          </span>
          <button
            onClick={onIncrease}
            className="md:w-8 h-4 w-4 md:h-8 flex items-center justify-center hover:bg-gray-100"
          >
            <Icon icon="lucide:plus" />
          </button>
        </div>

        <button
          onClick={onRemove}
          className="text-xs text-gray-400 underline hover:text-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
