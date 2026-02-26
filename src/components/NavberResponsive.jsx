import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import RouteLoader from "../components/loaders/routesLoader";

const NavberResponsive = ({
  city,
  setCity,
  cityList,
  navigate,
  setSidebar,
  sidebar,
}) => {
  const { pathname } = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/order", label: "Order" },
    { to: "/checkout", label: "Checkout" },
  ];

  return (
    <nav className="w-full flex relative items-center justify-between py-3 px-2 md:p-4 bg-[var(--background)] sticky top-0 border-b border-[var(--border)] z-50">
      {/* ================= LEFT ================= */}
      {!sidebar && (
        <div className="flex md:hidden items-center gap-3">
          <header className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-[#ff6a3d] rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="md:w-6 w-4 h-4 md:h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"
                />
              </svg>
            </div>
            <span className="md:text-2xl text-xl font-bold text-[#1b1b1b]">
              CraveBite
            </span>
          </header>

          <div className="flex items-center gap-x-2 bg-[var(--secondary)] px-2 py-1 rounded-[var(--radius-xl)] text-[var(--secondary-foreground)] text-sm font-medium">
            <Icon icon="lucide:map-pin" width={16} />
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent outline-none w-24"
            >
              {cityList.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}, Ng
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* ================= DESKTOP LEFT ================= */}
      <div className="hidden md:flex items-center gap-6">
        <header className="flex items-center gap-2">
          <div className="w-12 h-12 bg-[var(--logoColor)] rounded-md flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-[#1b1b1b]">CraveBite</span>
        </header>

        <div className="flex items-center gap-2 bg-[var(--secondary)] px-3 py-2 rounded-[var(--radius-xl)] text-sm font-medium">
          <Icon icon="lucide:map-pin" width={16} />
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-transparent outline-none"
          >
            {cityList.map((loc) => (
              <option key={loc} value={loc}>
                {loc}, Nigeria
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ================= CENTER NAV ================= */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex items-center gap-x-8 font-semibold text-[var(--primary)]">
          {navLinks.map(({ to, label }) => {
            const isActive = pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`relative pb-1 transition-colors duration-200
                    ${
                      isActive
                        ? "text-[var(--logoColor)]"
                        : "hover:text-[var(--navlink)]"
                    }
                  `}
                >
                  {label}
                  {/* Underline indicator */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--logoColor)] rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="flex items-center gap-2">
        <button
          className="p-2 rounded-full bg-[var(--secondary)] flex items-center justify-center"
          onClick={() => navigate("/checkout")}
        >
          <Icon icon="lucide:shopping-bag" width={20} />
        </button>

        {!sidebar && (
          <Icon
            icon="lucide:menu"
            className="md:hidden cursor-pointer"
            width={20}
            onClick={() => setSidebar(true)}
          />
        )}
      </div>
      <RouteLoader />
    </nav>
  );
};

export default NavberResponsive;
