import Foodcard from "../components/foodcard";
import { useRecipes } from "../context/RecipeList";
import { Link } from "react-router-dom";
// import SpoonacularRecipe from "../services/spoonacular";

// const foods = [
//   {
//     name: "Smokehouse BBQ",
//     desc: "American • Grill • Meat",
//     img: "https://storage.googleapis.com/banani-generated-images/generated-images/0c040f01-55ff-4f75-a38c-f39ec4e49162.jpg",
//     rating: 4.8,
//     time: "20-30 min",
//     delivery: "$0 Delivery",
//   },
//   {
//     name: "Sweet Tooth Cafe",
//     desc: "Desserts • Coffee • Breakfast",
//     img: "https://storage.googleapis.com/banani-generated-images/generated-images/665880fc-a549-42ae-94ad-494ae95b3b28.jpg",
//     rating: 4.5,
//     time: "15-25 min",
//     delivery: "$2.99 Delivery",
//   },
//   {
//     name: "Prime Cuts",
//     desc: "Steakhouse • Fine Dining",
//     img: "https://storage.googleapis.com/banani-generated-images/generated-images/8c38f005-900b-48bf-9129-980f47606c4f.jpg",
//     rating: 4.9,
//     time: "35-45 min",
//     delivery: "Free Delivery",
//   },
//   {
//     name: "Bella Italia",
//     desc: "Italian • Pizza • Pasta",
//     img: "https://storage.googleapis.com/banani-generated-images/generated-images/c8fd300e-de7c-4767-898f-0215a20de7df.jpg",
//     rating: 4.7,
//     time: "25-40 min",
//     delivery: "$1.49 Delivery",
//   },
// ];

export default function PopularFood() {
  const { recipes, loading, error } = useRecipes();
  return (
    <section className="   m-6  mb-8 mt-8 md:m-20 ">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-2xl font-bold flex gap-x-2 ">
          Popular <span className=" hidden md:block sm:block"> Near You</span>
        </h2>
        <Link to="/menu">
          <div className="text-[var(--primary)] font-semibold cursor-pointer flex items-center gap-2">
            View all <span>&rarr;</span>
          </div>
        </Link>
      </div>
      <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
        {recipes.map((food) => (
          <Foodcard prop={food} />
        ))}
      </div>
    </section>
  );
}
