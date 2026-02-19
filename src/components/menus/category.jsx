import { useChooseCategory } from "../../hooks/category";
import { useRef, useEffect } from "react";

export default function CategorySidebar({ categories, active }) {
  const { chooseCategory } = useChooseCategory();
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);

  // Scroll active button into view on mobile only
  useEffect(() => {
    const index = categories.findIndex(
      (cat) => cat.toLowerCase() === active.toLowerCase(),
    );
    if (
      index !== -1 &&
      buttonRefs.current[index] &&
      containerRef.current &&
      window.innerWidth < 768 // only scroll on screens < md
    ) {
      buttonRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest", // no vertical jump
        inline: "center", // center horizontally
      });
    }
  }, [active, categories]);

  // Drag/Touch scroll for mobile
  useEffect(() => {
    const slider = containerRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      slider.classList.add("cursor-grabbing");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const mouseUpOrLeave = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    // Attach events
    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseup", mouseUpOrLeave);
    slider.addEventListener("mouseleave", mouseUpOrLeave);
    slider.addEventListener("mousemove", mouseMove);

    // Touch events
    slider.addEventListener("touchstart", (e) => {
      isDown = true;
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("touchend", () => (isDown = false));
    slider.addEventListener("touchmove", (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseup", mouseUpOrLeave);
      slider.removeEventListener("mouseleave", mouseUpOrLeave);
      slider.removeEventListener("mousemove", mouseMove);
      slider.removeEventListener("touchstart", () => {});
      slider.removeEventListener("touchend", () => {});
      slider.removeEventListener("touchmove", () => {});
    };
  }, []);

  return (
    <aside className="md:sticky relative md:top-28">
      <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4 ml-4">
        Menu
      </h3>

      {/* Mobile: horizontal scroll, md+: vertical list */}
      <div
        ref={containerRef}
        className="
          flex flex-row md:flex-col
          md:gap-4 gap-4
          overflow-x-auto md:overflow-x-visible
          scroll-smooth
          px-2 md:px-0
          hide-scrollbar
          cursor-grab
        "
      >
        {categories.map((cat, index) => (
          <button
            key={cat}
            ref={(el) => (buttonRefs.current[index] = el)}
            onClick={() => chooseCategory(cat.toLowerCase())}
            className={`
    flex-shrink-0 md:flex-shrink md:w-full
    px-4 py-2 rounded-full md:rounded-lg font-medium transition whitespace-nowrap
    text-center md:text-left
    ${
      active.toLowerCase() === cat.toLowerCase()
        ? "bg-[var(--logoColor)] text-white shadow-lg md:shadow-none"
        : "bg-gray-100 md:bg-gray-100 text-gray-700 hover:bg-gray-200"
    }
  `}
          >
            {cat}
          </button>
        ))}
      </div>
    </aside>
  );
}
