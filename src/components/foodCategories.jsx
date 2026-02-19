import { useRecipes } from "../context/RecipeList";
import { Link } from "react-router-dom";
import { useChooseCategory } from "../hooks/category";

const categories = [
  {
    label: "Salad",
    apiValue: "salad",
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/a2b71bef-0e94-4532-9ada-0c0a10f1310b.jpg",
  },
  {
    label: "Snacks",
    apiValue: "snacks",
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/9b56c778-ad19-44b0-a0ba-b8b88910ec91.jpg",
  },
  {
    label: "breakfast",
    apiValue: "breakfast",
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/c395da2e-098e-446a-bb5a-7591b7a5f812.jpg",
  },
  {
    label: "Soup",
    apiValue: "soup",
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/17ee3f5f-8e11-4ae1-8ed0-17e7067f9abf.jpg",
  },
  {
    label: "Chicken",
    apiValue: "chicken",
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/f60af551-0537-446b-ade0-482962ad8bdf.jpg",
  },
  {
    label: "Drinks",
    apiValue: "drinks",
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/7ca0941e-6fc4-41b4-9d61-2424bd2847fc.jpg",
  },
];

export default function Categories() {
  const {
    recipes,
    loading,
    error,
    recipeNo,
    setErecipeNo,
    recipeTypes,
    setrecipeTypes,
  } = useRecipes();
  const { chooseCategory } = useChooseCategory();
  return (
    <section className="p-6 md:p-20 ">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-2xl font-bold flex gap-x-2 ">
          <span className=" hidden md:block sm:block">Explore by</span> Category
        </h2>
        <Link to="/menu">
          <div className="text-[var(--primary)] font-semibold cursor-pointer flex items-center gap-2">
            View all <span>&rarr;</span>
          </div>
        </Link>
      </div>
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
        {categories.map((cat) => (
          <Link to="/menu">
            <div
              key={cat.label}
              onClick={() => chooseCategory(cat.apiValue)}
              className="flex flex-col items-center gap-4 p-4 bg-[var(--card)] rounded-[var(--radius-xl)] cursor-pointer border border-[var(--border)] hover:scale-105 transition-transform"
            >
              <img
                src={cat.img}
                alt={cat.label}
                className="w-20 h-20 rounded-full object-cover bg-[var(--secondary)]"
              />
              <span className="font-semibold">{cat.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
