// src/components/loaders/FoodCardSkeleton.jsx
export default function FoodCardSkeleton() {
  return (
    <div className="bg-[var(--card)] rounded-[var(--radius-xl)] border border-[var(--border)] overflow-hidden flex flex-col animate-pulse cursor-pointer">
      {/* Image */}
      <div className="h-48 w-full bg-gray-200" />

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title + healthScore */}
        <div className="flex justify-between items-start mb-2">
          <div className="h-5 w-32 bg-gray-300 rounded" /> {/* title */}
          <div className="h-5 w-12 bg-gray-300 rounded" /> {/* score */}
        </div>

        {/* Subtitle / description */}
        <div className="h-4 w-full bg-gray-200 mb-4 rounded" />

        {/* Footer: time + price */}
        <div className="flex justify-between items-center text-sm font-medium">
          <div className="h-4 w-20 bg-gray-200 rounded" /> {/* time */}
          <div className="h-4 w-10 bg-gray-200 rounded" /> {/* price */}
        </div>
      </div>
    </div>
  );
}
