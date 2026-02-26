import FoodCard from "../foodcard";
import { useChooseCategory } from "../../hooks/category";
import FoodCardSkeleton from "../loaders/foodCardSkeleton";

export default function MenuSection({ title, items }) {
  const { loading } = useChooseCategory();
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold border-b pb-4 mb-6 capitalize">
        {title}
      </h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <FoodCardSkeleton key={i} />
            ))
          : items.map((item) => <FoodCard prop={item} key={item.id} />)}
      </div>
    </section>
  );
}
