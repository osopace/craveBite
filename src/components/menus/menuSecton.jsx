import FoodCard from "../foodcard";

export default function MenuSection({ title, items }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold border-b pb-4 mb-6 capitalize">
        {title}
      </h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6">
        {items.map((item) => (
          <FoodCard prop={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
