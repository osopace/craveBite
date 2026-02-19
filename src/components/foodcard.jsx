import { Icon } from "@iconify/react";
import FoodModal from "./menus/FoodModal";
import { useState } from "react";
import { useRecipes } from "../context/RecipeList";
import ExpandableText from "../components/textFormat";

export default function foodCard({ prop }) {
  const [isOpen, setIsOpen] = useState(false);
  const [recipys, setrecipys] = useState({});
  const { recipes } = useRecipes();

  const selectFoodOptions = (id) => {
    const foodOPtion = recipes.find((r) => r.id === id);
    setrecipys(foodOPtion);
    setIsOpen(true);
    console.log(recipys);
  };

  return (
    <>
      {isOpen && <FoodModal onClose={() => setIsOpen(false)} data={recipys} />}

      <div
        key={prop.id}
        onClick={() => {
          selectFoodOptions(prop.id);
        }}
        className="bg-[var(--card)]  rounded-[var(--radius-xl)] border border-[var(--border)] overflow-hidden flex flex-col cursor-pointer hover:scale-105 transition-transform"
      >
        <img
          src={prop.image}
          alt={prop.title}
          className="h-48 w-full object-cover"
        />
        <div className="p-5 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg">
              <ExpandableText text={prop.title} maxChars={20} />
            </h3>
            <div className="flex items-center gap-1 bg-[var(--secondary)] px-2 py-1 rounded-md text-sm">
              <span className="font-bold">{prop.healthScore}</span>
              <Icon icon="lucide:star" className="text-yellow-500 w-3 h-3" />
            </div>
          </div>
          <p className="text-[var(--muted-foreground)] text-sm mb-4">
            lovely looks
          </p>
          <div className="flex justify-between items-center text-sm font-medium">
            <div className="flex items-center gap-1 text-[var(--muted-foreground)]">
              <Icon icon="lucide:clock" className="w-4 h-4" />{" "}
              {prop.readyInMinutes} min
            </div>
            <div>{prop.pricePerServing}$</div>
          </div>
        </div>
      </div>
    </>
  );
}
