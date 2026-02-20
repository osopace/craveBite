import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function RouteLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="absolute bottom-0 left-0 w-full h-[3px] overflow-hidden">
      <div
        className={`h-full bg-[var(--logoColor)] transition-transform duration-500 ease-out ${
          loading ? "translate-x-0" : "-translate-x-full"
        }`}
      />
    </div>
  );
}
