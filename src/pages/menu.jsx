import RestaurantHeader from "../components/menus/menu";
import Navbar from "../components/unsignedNav";
import Category from "../components/menus/category";

import MenuSection from "../components/menus/menuSecton";
import { useRecipes } from "../context/RecipeList";

export default function MenuPage() {
  const categories = [
    "Salad",
    "Snacks",
    "Drinks",
    "Chicken",
    "breakfast",
    "Soup",
  ];

  const { recipes, recipeTypes, loading, error } = useRecipes();

  return (
    <>
      <div className=" w-full">
        <Navbar />
        <RestaurantHeader menu={recipes?.[0]} />

        <div className=" mx-auto px-6 md:px-10 md:mt-16 mt-8 flex flex-col md:grid grid-cols-[240px_1fr] gap-y-8   md:gap-12  ">
          <Category categories={categories} active={recipeTypes} />

          <main>
            <MenuSection title={recipeTypes} items={recipes} />
          </main>
        </div>
      </div>
    </>
  );
}
